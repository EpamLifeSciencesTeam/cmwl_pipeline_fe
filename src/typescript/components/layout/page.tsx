import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';

interface Props {}

export const Page: React.FC<Props> = ({ children }) => (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
      { children }
    </Container>
  </React.Fragment>
);
