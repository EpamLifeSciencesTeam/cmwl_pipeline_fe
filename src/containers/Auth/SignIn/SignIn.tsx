import React, { ChangeEvent, FormEvent, FC, useState } from 'react';
import { CmwlButton } from '../../../components/UI/AppButton/CmwlButton';
import { CmwInput } from '../../../components/UI/CmwInput';
import { logIn } from '../../../store/auth/actions';
import { useDispatch } from 'react-redux';
import { CmwlThunkDispatch } from '../../../store';
import { Avatar, Container, Paper, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Copyright } from '../Copyright';
import { AUTH_EMAIL_LABEL, AUTH_PASSWORD_LABEL, AUTH_SIGN_IN_TEXT } from '../../../shared/Constants';
import { useSignInStyles } from './SignInStyles';

interface StateProps {
  loginForm: {
    email: string
    password: string
  }
}

const SignIn: FC = () => {

  const classes = useSignInStyles();
  const dispatch: CmwlThunkDispatch = useDispatch();

  const [getState, setState] = useState<StateProps>({
    loginForm: {
      email: '',
      password: ''
    }
  });

  const inputChangedHandler = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    const updatedLoginForm = {
      ...getState.loginForm,
      [id]: event.target.value
    };

    setState({
      loginForm: updatedLoginForm
    });
  };

  const logInHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(logIn({
      email: getState.loginForm.email,
      password: getState.loginForm.password
    }));
  };

  // ToDo: Add "Remember me" checkbox
  // ToDo: Add "Forgot password?"
  // ToDo: Add "Don't have an account? Sign Up"
  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={logInHandler}>
          <CmwInput
            type='text'
            label={AUTH_EMAIL_LABEL}
            value={getState.loginForm.email}
            onChange={(event: ChangeEvent<HTMLInputElement>) => inputChangedHandler(event, 'email')} />
          <CmwInput
            type='password'
            label={AUTH_PASSWORD_LABEL}
            value={getState.loginForm.password}
            onChange={(event: ChangeEvent<HTMLInputElement>) => inputChangedHandler(event, 'password')} />
          <CmwlButton type='submit'>{AUTH_SIGN_IN_TEXT}</CmwlButton>
        </form>
        <Copyright />
      </Paper>
    </Container>
  );
};

export default SignIn;
