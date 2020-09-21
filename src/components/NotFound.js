import React from 'react';

import { Heading } from './Headings';
import { Container } from './Container';

export default function NotFound() {
  return (
    <Container>
      <Heading h1 title="Error 404" />
      <p>This page doesn't exist.</p>
    </Container>
  );
}
