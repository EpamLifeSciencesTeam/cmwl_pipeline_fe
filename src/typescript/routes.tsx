import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignInPage from '@pipeline/pages/sign-in';
import SignUpPage from '@pipeline/pages/sign-up';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/sign-in" component={SignInPage}/>
    <Route exact path="/sign-up" component={SignUpPage}/>
  </Switch>
);

export default Routes;
