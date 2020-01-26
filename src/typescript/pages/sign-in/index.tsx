import React       from 'react';
import { connect } from 'react-redux';
import { Link }    from 'react-router-dom';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles }        from '@material-ui/core/styles';

import { SignInForm }          from '@pipeline/components/form/sign-in-form';
import { Page }                from '@pipeline/components/layout/page';
import { ConnectedReduxProps } from '@pipeline/store';
import { inputEventHandler }   from '@pipeline/utils/event';

const useStyles = makeStyles(theme => (
  { paper : { marginTop    : theme.spacing(8)
            , display      : 'flex'
            , flexDirection: 'column'
            , alignItems   : 'center'
            }
  , avatar: { margin         : theme.spacing(1)
            , backgroundColor: theme.palette.secondary.main
            }
  , form  : { width    : '100%'
            , marginTop: theme.spacing(1)
            }
  , submit: { margin: theme.spacing(3, 0, 2)
            }
  }
));

interface PropsFromState {}

interface PropsFromDispatch {}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

const SignInPage: React.FC<AllProps> = () => {
  const [ email   , setEmail    ] = React.useState('');
  const [ password, setPassword ] = React.useState('');
  const classes = useStyles();

  return (
    <Page>
      <Paper className={ classes.paper }>
        <SignInForm email   ={{ value: email   , update: inputEventHandler(setEmail)    }}
                    password={{ value: password, update: inputEventHandler(setPassword) }}
                    onSubmit={ event => { event.preventDefault(); console.log(event) } }/>
        <Typography>No account? <Link to="/sign-up">Sign up</Link></Typography>
      </Paper>
    </Page>
  );
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
