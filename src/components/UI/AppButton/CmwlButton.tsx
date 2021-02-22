import React, { FC, MouseEventHandler } from 'react';
import { Button } from '@material-ui/core';
import { useCmwlButtonStyles } from './CmwlButtonStyles';

interface AppButtonProps {
  type?: 'submit' | 'reset' | 'button'
  onClick?: MouseEventHandler
}

export const CmwlButton: FC<AppButtonProps> = props => {
  const classes = useCmwlButtonStyles();

  return <Button
    className={classes.submit}
    variant='contained'
    color='primary'
    fullWidth
    {...props} />;
};
