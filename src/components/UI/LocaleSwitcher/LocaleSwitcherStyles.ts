import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useLocaleSwitcherStyles = makeStyles((theme: Theme) =>
  createStyles({
    hideIcon: {
      display: 'none'
    },
    menuItem: {
      justifyContent: 'center',
    },
    select: {
      width: theme.spacing(6),
      justifyContent: 'center',
      padding: theme.spacing(1, 3),
      '&&': {
        paddingRight: theme.spacing(0)
      }
    },
    avatar: {
      width: theme.spacing(3),
      height: theme.spacing(3)
    }
  })
);
