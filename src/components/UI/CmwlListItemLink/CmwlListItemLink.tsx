import React, { FC, forwardRef, useMemo } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useCmwlListItemLinkStyles } from './CmwlListItemLinkStyles';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

export const CmwlListItemLink: FC<ListItemLinkProps> = props => {
  const classes = useCmwlListItemLinkStyles();

  const memoNavLink = useMemo(
    () =>
      forwardRef<any, Omit<NavLinkProps, 'to'>>((itemProps, ref) => (
        <NavLink to={props.to} ref={ref} {...itemProps} />
      )),
    [props.to]
  );

  return (
    <ListItem button component={memoNavLink} activeClassName='Mui-selected'>
      {props.icon ? <ListItemIcon className={classes.listItemLeft}>{props.icon}</ListItemIcon> : null}
      <ListItemText primary={props.primary} />
    </ListItem>
  );
};
