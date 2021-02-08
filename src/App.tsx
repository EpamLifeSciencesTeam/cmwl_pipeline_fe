import React, { Component } from 'react';
import Auth from './containers/AuthForm/Auth';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import Button from './components/UI/Button/Button';
import { Dispatch } from 'redux';
import { logOut } from './store/auth/actions';
import { connect } from 'react-redux';
import { RootState } from './store';
import { Fragment } from 'react';

interface StateProps {
  isAuthenticated: boolean
}

interface DispatchProps {
  onLogOut: () => void
}

type Props = StateProps & DispatchProps

class App extends Component<Props> {

  logOutHandler = () => {
    this.props.onLogOut();
  };

  render() {
    // ToDo: Create a navigation component

    const content = () => {
      if (this.props.isAuthenticated) {
        return (
          <Fragment>
            {/*ToDo: rid off from the inline-style */}
            <NavLink style={{ margin: '10px' }} to='/'>Home</NavLink>
            <NavLink style={{ margin: '10px' }} to='/projects'>Projects</NavLink>
            <Button onClick={this.logOutHandler}>Log out</Button>
            <Redirect to='/' />
          </Fragment>
        );
      }
      return <Redirect to='/auth' />;
    };

    return (
      <div style={{textAlign: 'center'}}>
        <h1>Cromwell Pipeline</h1>
        {content()}
        <Switch>
          {/*ToDo: rid off from the inline-renders */}
          <Route path='/auth' component={Auth} />
          <Route path='/projects' render={() => <h2>Projects content</h2>} />
          <Route path='/' exact render={() => <h2>Main content</h2>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    onLogOut: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
