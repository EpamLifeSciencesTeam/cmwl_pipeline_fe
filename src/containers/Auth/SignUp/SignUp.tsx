import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useSignUpStyles } from './SignUpStyles';
import { Avatar, Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Copyright } from '../Copyright';
import { CmwlInput } from '../../../components/UI/CmwlInput';
import { CmwlButton } from '../../../components/UI/AppButton/CmwlButton';
import { Link } from 'react-router-dom';
import { AUTH_ALREADY_HAVE_AN_ACCOUNT, AUTH_SIGN_UP_TEXT } from '../../../shared/Constants';
import { CmwlThunkDispatch } from '../../../store';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../store/auth/actions';

interface StateProps {
  signUpForm: {
    firstName: string
    lastName: string
    email: string
    password: string
  }
}

const SignUp: FC = () => {

  const classes = useSignUpStyles();
  const dispatch: CmwlThunkDispatch = useDispatch();

  const [getState, setState] = useState<StateProps>({
    signUpForm: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  });

  const inputChangedHandler = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const updatedSignUpForm = {
      ...getState.signUpForm,
      [id]: event.target.value
    };

    setState({
      signUpForm: updatedSignUpForm
    });
  };

  const signUpHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(signUp({
      firstName: getState.signUpForm.firstName,
      lastName: getState.signUpForm.lastName,
      email: getState.signUpForm.email,
      password: getState.signUpForm.password
    }));
  };

  return (
    <Grid container direction='column' justify='center' alignItems='center' className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>{AUTH_SIGN_UP_TEXT}</Typography>
        <form className={classes.form} onSubmit={signUpHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CmwlInput
                id='firstName'
                type='text'
                name='firstName'
                label='First Name'
                value={getState.signUpForm.firstName}
                onChange={inputChangedHandler('firstName')} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CmwlInput
                id='lastName'
                type='text'
                name='lastName'
                label='Last Name'
                value={getState.signUpForm.lastName}
                onChange={inputChangedHandler('lastName')} />
            </Grid>
            <Grid item xs={12}>
              <CmwlInput
                id='email'
                type='text'
                name='email'
                label='Email Address'
                value={getState.signUpForm.email}
                onChange={inputChangedHandler('email')} />
            </Grid>
            <Grid item xs={12}>
              <CmwlInput
                id='password'
                type='password'
                name='password'
                label='Password'
                autoComplete='current-password'
                value={getState.signUpForm.password}
                onChange={inputChangedHandler('password')} />
            </Grid>
          </Grid>
          <CmwlButton type='submit'>{AUTH_SIGN_UP_TEXT}</CmwlButton>
          <Container>
            <Box m={1}>
              <Link to='/sign-in'>{AUTH_ALREADY_HAVE_AN_ACCOUNT}</Link>
            </Box>
          </Container>
        </form>
        <Copyright />
      </Paper>
    </Grid>
  );
};

export default SignUp;
