import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useSignInStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: '75vh'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
    width: '20vw'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  }
}));
