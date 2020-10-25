import React from 'react';

import { useFetch } from '../helpers/useFetch';
import { Heading } from './Headings';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import { UnorderedList } from './StyledLists';

export default function Repertoire() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/repertoire`);

  return content?.error ? (
    <FailedToLoad />
  ) : (
    <Container>
      <Heading h1 title="Repertoire" />
      <UnorderedList>
        {content?.response?.map((repertoire) => (
          <li key={repertoire.piece} dangerouslySetInnerHTML={{ __html: repertoire.piece }} />
        ))}
      </UnorderedList>
    </Container>
  );
}
