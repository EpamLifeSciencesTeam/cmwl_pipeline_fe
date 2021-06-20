import React, { FC, useEffect, useState } from 'react';
import SignIn from './containers/Auth/SignIn/SignIn';
import SignUp from './containers/Auth/SignUp/SignUp';
import { Redirect, Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { Dashboard } from './containers/Dashboard/Dashboard';
import { Box, Container, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import classNames from 'classnames';
import { LocaleContext, LocaleLanguage } from './context/LocaleContext';
import { authenticateUser } from "./store/auth/actions";


export const useStyles = makeStyles((theme: Theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    justifyContent: 'center'
  },
  fixedHeight: {
    height: '85vh'
  }
}));

const App: FC = () => {

  const [locale, setLocale] = useState(LocaleLanguage.en);

  const classes = useStyles();
  const fixedHeightPaper = classNames({
    [classes.paper]: true,
    [classes.fixedHeight]: true
  });
  const isAuthenticated = useSelector<RootState, boolean>(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated && localStorage.getItem('accessToken')) {
      dispatch(authenticateUser);
    }
  });

  const content = () => {
    if (isAuthenticated) {
      return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <Dashboard>
            {/* Just for now, Dashboard's content is a PoC and this implementation will be removed in the nearest time */}
            <main className={classes.content}>
              <Box className={classes.appBarSpacer} />
              <Container maxWidth='xl' className={classes.container}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Paper className={fixedHeightPaper}>
                      <Switch>
                        {/*ToDo: rid off from the inline-renders */}
                        <Route path='/projects' render={() => <h2>Projects content ({locale})</h2>} />
                        <Route path='/executions' render={() => <h2>Executions content ({locale})</h2>} />
                        <Route path='/' exact render={() => <h2>Main content ({locale})</h2>} />
                      </Switch>
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </main>
          </Dashboard>
          <Redirect to='/' />
        </LocaleContext.Provider>
      );
    }
    return (
      <>
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-up' component={SignUp} />
        <Redirect to='/sign-in' />
      </>
    );
  };

  return (
    <Box style={{ textAlign: 'center' }}>
      {content()}
    </Box>
  );
};

export default App;
