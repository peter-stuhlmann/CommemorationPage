import React from 'react';

import { useFetch } from '../helpers/useFetch';
import { Heading } from './Headings';
import { Container } from './Container';

export default function Choirs() {
  const content = useFetch('https://david-shallon-api.vercel.app/choirs');

  return (
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
