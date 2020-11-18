import React from 'react';

import { Heading } from './Headings';
import { Container } from './Container';
import { meta } from '../helpers/meta';

export default function NotFound() {
  document.title = "Error 404 | David Shallon";
  meta('name', 'description', 'There was an error on this page.');

  return (
    <Container>
      <Heading h1 title="Error 404" />
      <p>This page doesn't exist.</p>
    </Container>
  );
}
