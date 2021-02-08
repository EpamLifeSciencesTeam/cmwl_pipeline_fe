import React, { FunctionComponent, MouseEventHandler } from 'react';
import classes from './Button.module.css';

type ButtonProps = {
  onClick?: MouseEventHandler
}

// ToDo: create disable mode (with appropriate style)
const button: FunctionComponent<ButtonProps> = props => {
  return (
    <button className={classes.Button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default button;
