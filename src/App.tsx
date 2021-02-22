import React, { FunctionComponent } from 'react';
import SignIn from './containers/Auth/SignIn/SignIn';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Dashboard } from './containers/Dashboard/Dashboard';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import clsx from 'clsx';


export const useStyles = makeStyles((theme) => ({
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
    flexDirection: 'column'
  },
  fixedHeight: {
    height: '85vh'
  }
}));

const App: FunctionComponent = () => {

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const isAuthenticated = useSelector<RootState, boolean>(state => state.auth.isAuthenticated);

  const content = () => {
    if (isAuthenticated) {
      return (
        <>
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
                        <Route path='/projects' render={() => <h2>Projects content</h2>} />
                        <Route path='/executions' render={() => <h2>Executions content</h2>} />
                        <Route path='/' exact render={() => <h2>Main content</h2>} />
                      </Switch>
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </main>
          </Dashboard>
          <Redirect to='/' />
        </>
      );
    }
    return (
      <>
        <Route path='/auth' component={SignIn} />
        <Redirect to='/auth' />
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
