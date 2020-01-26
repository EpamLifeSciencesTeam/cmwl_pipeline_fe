import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles }        from '@material-ui/core/styles';

import { Mutable } from '@pipeline/utils/mutable';

const useStyles = makeStyles(theme => (
  { form  : { display      : 'flex'
            , flexDirection: 'column'
            , alignItems   : 'center'
            , width        : '100%'
            , marginTop    : theme.spacing(1)
            }
  , submit: { margin: theme.spacing(3, 0, 2)
            }
  }
));

interface Props {
  readonly    email: Mutable<String>;
  readonly password: Mutable<String>;
  readonly onSubmit: React.FormEventHandler<HTMLFormElement>;
}
  
export const SignInForm: React.FC<Props> = ({ email, password, onSubmit }) => {
  const classes = useStyles();

  return (
    <form className={ classes.form } 
          onSubmit={ onSubmit }>
      <TextField id='email'
                 type='email'
                 label='Email'
                 value={ email.value }
                 onChange={ email.update }
                 margin='normal'/>
      <TextField id='standard-password-input'
                 type='password'
                 label='Password'
                 value={ password.value }
                 autoComplete='current-password'
                 onChange={ password.update }
                 margin='normal'/>
      <Button className={ classes.submit }
              variant='contained'
              type='submit'>
        Sign in
      </Button>
    </form>
  );
};
