import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import classes from './Auth.module.css';
import { Button } from '../../components/UI/Button/Button';
import { Input } from '../../components/UI/Input/Input';
import { logIn } from '../../store/auth/actions';
import { useDispatch } from 'react-redux';
import { AppThunkDispatch } from '../../store';

interface StateProps {
  loginForm: {
    email: string
    password: string
  }
}

const Auth: FunctionComponent = () => {

  const [getState, setState] = useState<StateProps>({
    loginForm: {
      email: '',
      password: ''
    }
  });

  const dispatch: AppThunkDispatch = useDispatch();

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

  return (
    <div className={classes.AuthForm}>
      <form onSubmit={logInHandler}>
        <h2>Please, log in</h2>
        <Input
          type='text'
          placeholder='Email'
          value={getState.loginForm.email}
          onChange={(event: ChangeEvent<HTMLInputElement>) => inputChangedHandler(event, 'email')} />
        <Input
          type='password'
          placeholder='Password'
          value={getState.loginForm.password}
          onChange={(event: ChangeEvent<HTMLInputElement>) => inputChangedHandler(event, 'password')} />
        <Button>Log in</Button>
      </form>
    </div>
  );
};

export default Auth;
