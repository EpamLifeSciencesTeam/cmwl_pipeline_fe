import React from 'react';
import { Typography } from '@material-ui/core';
import { AUTH_COPYRIGHT_TEXT, AUTH_CMWL_TITLE } from '../../shared/Constants';

export const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {AUTH_COPYRIGHT_TEXT} {AUTH_CMWL_TITLE} {new Date().getFullYear()}.
    </Typography>
  );
};
