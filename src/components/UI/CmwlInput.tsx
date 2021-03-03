import React, { ChangeEventHandler, FC } from 'react';
import { TextField } from '@material-ui/core';

interface AppInputProps {
  id?: string
  type?: string
  name?: string
  label?: string
  value?: string
  autoComplete?: string
  onChange?: ChangeEventHandler
}

export const CmwlInput: FC<AppInputProps> = props => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required={true}
      fullWidth={true}
      {...props}
    />
  );
};
