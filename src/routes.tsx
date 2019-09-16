import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/login';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage}/>
  </Switch>
);

export default Routes;
