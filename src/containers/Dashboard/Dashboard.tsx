import {
  AppBar,
  CssBaseline,
  IconButton,
  Divider,
  Drawer,
  Toolbar,
  List, Box
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LoopIcon from '@material-ui/icons/Loop';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { FC, useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/auth/actions';
import { CmwlListItemLink } from '../../components/UI/CmwlListItemLink/CmwlListItemLink';
import {
  DASHBOARD_CMWL_TITLE,
  DASHBOARD_EXECUTIONS_NAV_PRIMARY,
  DASHBOARD_PROJECTS_NAV_PRIMARY
} from '../../shared/Constants';
import { CmwlTypographyLink } from '../../components/UI/CmwlTypographyLink';
import { useDashboardStyles } from './DashboardStyles';
import classNames from 'classnames';
import { LocaleSwitcher } from '../../components/UI/LocaleSwitcher/LocaleSwitcher';

export const Dashboard: FC = props => {
  const dispatch = useDispatch();
  const classes = useDashboardStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const signOutHandler = () => {
    dispatch(signOut);
  };

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar position='absolute' className={classNames({
        [classes.appBar]: true,
        [classes.appBarShift]: open
      })}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={classNames({
              [classes.menuButton]: true,
              [classes.menuButtonHidden]: open
            })}>
            <MenuIcon />
          </IconButton>
          <CmwlTypographyLink
            className={classes.title}
            variant='h6'
            color='inherit'
            noWrap
            to='/'>
            {DASHBOARD_CMWL_TITLE}
          </CmwlTypographyLink>
          <LocaleSwitcher />
          <IconButton color='inherit' onClick={signOutHandler}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        classes={{
          paper: classNames({
            [classes.drawerPaper]: true,
            [classes.drawerPaperClose]: !open
          })
        }}
        open={open}>
        <Box className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          <CmwlListItemLink to='/projects' primary={DASHBOARD_PROJECTS_NAV_PRIMARY} icon={<AssignmentIcon />} />
          <CmwlListItemLink to='/executions' primary={DASHBOARD_EXECUTIONS_NAV_PRIMARY} icon={<LoopIcon />} />
        </List>
      </Drawer>
      {props.children}
    </Box>
  );
};
