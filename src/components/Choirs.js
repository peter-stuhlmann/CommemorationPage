import React from 'react';

import { useFetch } from '../helpers/useFetch';
import { Heading } from './Headings';
import { Container } from './Container';
import { FailedToLoad } from './Messages';

export default function Choirs() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/choirs`);

  return content?.error ? (
    <FailedToLoad />
  ) : (
    <Container>
      <Heading h1 title="Choirs David Shallon conducted" />
      <ul>
        {content?.response?.map((choir) => (
          <li key={choir.choir}>{choir.choir}</li>
        ))}
      </ul>
    </Container>
  );
}
