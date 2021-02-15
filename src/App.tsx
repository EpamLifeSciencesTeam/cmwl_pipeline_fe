import React, { FunctionComponent } from 'react';
import Auth from './containers/AuthForm/Auth';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Button } from './components/UI/Button/Button';
import { logOut } from './store/auth/actions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';

const App: FunctionComponent = () => {

  const isAuthenticated = useSelector<RootState, boolean>(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOut());
  };

  const content = () => {
    // ToDo: Create a navigation component
    if (isAuthenticated) {
      return (
        <>
          {/*ToDo: rid off from the inline-style */}
          <NavLink style={{ margin: '10px' }} to='/'>Home</NavLink>
          <NavLink style={{ margin: '10px' }} to='/projects'>Projects</NavLink>
          <Button onClick={logOutHandler}>Log out</Button>
          <Redirect to='/' />
        </>
      );
    }
    return <Redirect to='/auth' />;
  };

  return (
    <div style={{ textAlign: 'center' }}>
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
};

export default App;
