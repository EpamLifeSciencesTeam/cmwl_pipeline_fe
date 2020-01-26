import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Mutable } from '@pipeline/utils/mutable';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

interface SignUpProps {
  readonly firstName: Mutable<String>;
  readonly lastName: Mutable<String>;
  readonly email: Mutable<String>;
  readonly password: Mutable<String>;
}

export const SignUpForm: React.FC<SignUpProps> = ({ firstName, lastName, email, password }) => {
  const classes = useStyles();

  return (
    <form className={ classes.form }>
      <TextField id='firstName'
                 type='text'
                 label='First name'
                 value={ firstName.value }
                 onChange={ firstName.update }
                 margin='normal'/>
      <TextField id='lastName'
                 type='text'
                 label='Last name'
                 value={ lastName.value }
                 onChange={ lastName.update }
                 margin='normal'/>
      <TextField id='email'
                 type='email'
                 label='E-mail'
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
        Sign up
      </Button>
    </form>
  );
};
