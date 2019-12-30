import * as React from 'react';
import { connect } from 'react-redux';

import Page from '../../components/layout/Page';

import { ConnectedReduxProps } from '../../store';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface PropsFromState {}

interface PropsFromDispatch {}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

interface State {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

class SignUpPage extends React.Component<AllProps, State> {
  constructor(props: AllProps) {
    super(props);

    this.state = { firstName: '', lastName: '', email: '', password: '' };
  }

  public render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <Page>
        <Paper>
          <TextField
            id="firstName"
            type="text"
            label="First name"
            value={firstName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange('firstName', event)}
            margin="normal"
          />
          <TextField
            id="lastName"
            type="text"
            label="Last name"
            value={lastName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange('lastName', event)}
            margin="normal"
          />
          <TextField
            id="email"
            type="email"
            label="E-mail"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange('email', event)}
            margin="normal"
          />
          <TextField
            id="standard-password-input"
            type="password"
            label="Password"
            value={password}
            autoComplete="current-password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange('password', event)}
            margin="normal"
          />
          <Typography>Have account <Link to="/sign-in">Sign in</Link>?</Typography>
          <Button variant="contained">Login</Button>
        </Paper>
      </Page>
    );
  }

  private handleChange(field: keyof State, event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ ...this.state, [field]: event.target.value });
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
