import React       from 'react';
import { connect } from 'react-redux';
import { Link }              from 'react-router-dom';
import { Paper, Typography } from '@material-ui/core';

import { Page }                from '@pipeline/components/layout/page';
import { ConnectedReduxProps } from '@pipeline/store';
import { inputEventHandler }   from '@pipeline/utils/event';
import { useStyles }           from '@pipeline/utils/styled';
import { SignUpForm }          from '@pipeline/components/form/sign-up-form';

interface PropsFromState {}

interface PropsFromDispatch {}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

const SignUpPage: React.FC<AllProps> = () => {
  const [ firstName, setFirstName ] = React.useState('');
  const [ lastName , setLastName  ] = React.useState('');
  const [ email    , setEmail     ] = React.useState('');
  const [ password , setPassword  ] = React.useState('');
  const classes = useStyles();

  return (
    <Page>
      <Paper className={ classes.paper }>
        <SignUpForm firstName={{ value: firstName, update: inputEventHandler(setFirstName) }}
                    lastName ={{ value: lastName , update: inputEventHandler(setLastName)  }}
                    email    ={{ value: email    , update: inputEventHandler(setEmail)     }}
                    password ={{ value: password , update: inputEventHandler(setPassword)  }}/>
        <Typography>Have account <Link to="/sign-in">Sign in</Link>?</Typography>
      </Paper>
    </Page>
  );
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
