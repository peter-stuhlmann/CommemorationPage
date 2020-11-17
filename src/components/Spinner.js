import React from 'react';
import { Container } from './Container';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Spinner() {
  return (
    <Container fixedCenter>
      <CircularProgress />
    </Container>
  );
}
