import React, { ChangeEventHandler, FC } from 'react';
import { TextField } from '@material-ui/core';

interface AppInputProps {
  id?: string
  type?: string
  name?: string
  label?: string
  value?: string
  onChange?: ChangeEventHandler
}

export const CmwInput: FC<AppInputProps> = props => {
  return (
    <TextField
      id={props.id}
      type={props.type}
      name={props.name}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      variant="outlined"
      margin="normal"
      required
      fullWidth
    />
  );
};
