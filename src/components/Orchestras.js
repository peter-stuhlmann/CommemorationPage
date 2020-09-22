import React from 'react';

import { useFetch } from '../helpers/useFetch';
import { Heading } from './Headings';
import { Container } from './Container';

export default function Orchestras() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/orchestras`);

  return (
    <Container>
      <Heading h1 title="Orchestras" />
      <ul>
        {content?.response?.map((orchestra) => (
          <li key={orchestra.orchestra}>{orchestra.orchestra}</li>
        ))}
      </ul>
    </Container>
  );
}
