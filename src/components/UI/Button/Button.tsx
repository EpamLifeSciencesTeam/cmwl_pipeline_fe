import React, { FunctionComponent, MouseEventHandler } from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  onClick?: MouseEventHandler
}

// ToDo: create disable mode (with appropriate style)
export const Button: FunctionComponent<ButtonProps> = props => {
  return (
    <button className={classes.Button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
