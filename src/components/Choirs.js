import React from 'react';

import { useFetch } from '../helpers/useFetch';
import { Heading } from './Headings';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import { UnorderedList } from './StyledLists';
import { meta } from '../helpers/meta';

export default function Choirs() {
  const choirs = useFetch(`${process.env.REACT_APP_API_URL}/choirs`);
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/choirs`);

  document.title = content?.response?.meta?.title;
  meta('name', 'description', content?.response?.meta?.description);

  return choirs?.error || content?.error ? (
    <FailedToLoad />
  ) : (
    <Container>
      <Heading h1 title="Choirs David Shallon conducted" />
      <UnorderedList>
        {choirs?.response?.map((choir) => (
          <li key={choir.choir}>{choir.choir}</li>
        ))}
      </UnorderedList>
    </Container>
  );
}
