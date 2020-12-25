import React from 'react';
import { Container } from './Container';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Spinner({ inner }) {
  return inner ? (
    <Container spinner>
      <CircularProgress />
    </Container>
  ) : (
    <Container fixedCenter>
      <CircularProgress />
    </Container>
  );
}
