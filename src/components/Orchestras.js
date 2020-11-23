import React, { Fragment } from 'react';

import { useFetch } from '../helpers/useFetch';
import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import { UnorderedList } from './StyledLists';
import { meta } from '../helpers/meta';

export default function Orchestras() {
  const orchestras = useFetch(`${process.env.REACT_APP_API_URL}/orchestras`);
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/orchestras`);

  document.title = content?.response?.meta?.title;
  meta('name', 'description', content?.response?.meta?.description);

  return orchestras?.error || content?.error ? (
    <FailedToLoad />
  ) : (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        <UnorderedList>
          {orchestras?.response?.map((orchestra) => (
            <li key={orchestra.orchestra}>{orchestra.orchestra}</li>
          ))}
        </UnorderedList>
      </Container>
    </Fragment>
  );
}
