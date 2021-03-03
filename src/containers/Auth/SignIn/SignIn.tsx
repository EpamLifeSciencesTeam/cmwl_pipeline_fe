import React, { ChangeEvent, FormEvent, FC, useState } from 'react';
import { CmwlButton } from '../../../components/UI/AppButton/CmwlButton';
import { CmwlInput } from '../../../components/UI/CmwlInput';
import { signIn } from '../../../store/auth/actions';
import { useDispatch } from 'react-redux';
import { CmwlThunkDispatch } from '../../../store';
import { Avatar, Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Copyright } from '../Copyright';
import {
  AUTH_DONT_HAVE_AN_ACCOUNT,
  AUTH_EMAIL_LABEL,
  AUTH_PASSWORD_LABEL,
  AUTH_SIGN_IN_TEXT
} from '../../../shared/Constants';
import { useSignInStyles } from './SignInStyles';
import { Link } from 'react-router-dom';

interface StateProps {
  signInForm: {
    email: string
    password: string
  }
}

const SignIn: FC = () => {

  const classes = useSignInStyles();
  const dispatch: CmwlThunkDispatch = useDispatch();

  const [getState, setState] = useState<StateProps>({
    signInForm: {
      email: '',
      password: ''
    }
  });

  const inputChangedHandler = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const updatedSignInForm = {
      ...getState.signInForm,
      [id]: event.target.value
    };

    setState({
      signInForm: updatedSignInForm
    });
  };

  const signInHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(signIn({
      email: getState.signInForm.email,
      password: getState.signInForm.password
    }));
  };

  // ToDo: Add "Remember me" checkbox
  // ToDo: Add "Forgot password?"
  return (
    <Grid container direction='column' justify='center' alignItems='center' className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>{AUTH_SIGN_IN_TEXT}</Typography>
        <form className={classes.form} onSubmit={signInHandler}>
          <CmwlInput
            type='text'
            label={AUTH_EMAIL_LABEL}
            value={getState.signInForm.email}
            onChange={inputChangedHandler('email')} />
          <CmwlInput
            type='password'
            label={AUTH_PASSWORD_LABEL}
            value={getState.signInForm.password}
            onChange={inputChangedHandler('password')} />
          <CmwlButton type='submit'>{AUTH_SIGN_IN_TEXT}</CmwlButton>
          <Container>
            <Box m={1}>
              <Link to='/sign-up'>{AUTH_DONT_HAVE_AN_ACCOUNT}</Link>
            </Box>
          </Container>
        </form>
        <Copyright />
      </Paper>
    </Grid>
  );
};

export default SignIn;
