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

import clsx from 'clsx';
import { FC, useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/auth/actions';
import { CmwlListItemLink } from '../../components/UI/CmwlListItemLink/CmwlListItemLink';
import {
  DASHBOARD_CMWL_TITLE,
  DASHBOARD_EXECUTIONS_NAV_PRIMARY,
  DASHBOARD_PROJECTS_NAV_PRIMARY
} from '../../shared/Constants';
import { CmwlTypographyLink } from '../../components/UI/CmwlTypographyLink';
import { useDashboardStyles } from './DashboardStyles';

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

  const logOutHandler = () => {
    dispatch(logOut());
  };

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar position='absolute' className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
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
          <IconButton color='inherit' onClick={logOutHandler}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
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
