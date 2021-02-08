import React, { ChangeEventHandler } from 'react';
import classes from './Input.module.css';

export type InputProps = {
  type: string
  placeholder: string
  value: string
  onChange: ChangeEventHandler
}

// ToDo: create validation result representation (with appropriate style)
const input = (props: InputProps) => {
  return (
    <input
      className={classes.Input}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange} />
  );
};

export default input;
