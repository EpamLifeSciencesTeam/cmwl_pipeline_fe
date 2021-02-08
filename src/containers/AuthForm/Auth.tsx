import React, { ChangeEvent, Component, FormEvent } from 'react';
import classes from './Auth.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { LogInData } from '../../store/auth/types';
import { logIn } from '../../store/auth/actions';
import { connect } from 'react-redux';
import { AppThunkDispatch } from '../../store';

interface StateProps {
  loginForm: {
    email: string
    password: string
  }
}

interface DispatchProps {
  onLogIn: (logInData: LogInData) => void
}

class Auth extends Component<DispatchProps, StateProps> {

  state: StateProps = {
    loginForm: {
      email: '',
      password: ''
    }
  };

  inputChangedHandler = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    const updatedLoginForm = {
      ...this.state.loginForm,
      [id]: event.target.value
    };

    this.setState({
      ...this.state,
      loginForm: updatedLoginForm
    });
  };

  loginHandler = (event: FormEvent) => {
    event.preventDefault();
    this.props.onLogIn({
      email: this.state.loginForm.email,
      password: this.state.loginForm.password
    });
  };

  // ToDo: Add Sign Up form
  render() {
    return (
      <div className={classes.AuthForm}>
        <form onSubmit={this.loginHandler}>
          <h2>Please, log in</h2>
          <Input
            type='text'
            placeholder='Email'
            value={this.state.loginForm.email}
            onChange={(event: ChangeEvent<HTMLInputElement>) => this.inputChangedHandler(event, 'email')} />
          <Input
            type='password'
            placeholder='Password'
            value={this.state.loginForm.password}
            onChange={(event: ChangeEvent<HTMLInputElement>) => this.inputChangedHandler(event, 'password')} />
          <Button>Log in</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: AppThunkDispatch): DispatchProps => {
  return {
    onLogIn: (logInData: LogInData) => dispatch(logIn(logInData))
  };
};

export default connect(null, mapDispatchToProps)(Auth);
