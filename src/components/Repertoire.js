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
        {content?.response
          ?.sort((a, b) => a.piece.plain - b.piece.plain)
          .map((repertoire) => {
            return (
              <li
                key={repertoire.id}
                dangerouslySetInnerHTML={{ __html: repertoire.piece.html }}
              />
            );
          })}
      </UnorderedList>
    </Container>
  );
}
