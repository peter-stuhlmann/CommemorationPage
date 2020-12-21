import React, { Fragment, useEffect } from 'react';

import { useFetch } from '../helpers/useFetch';
import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import { UnorderedList } from './StyledLists';
import { meta } from '../helpers/meta';

export default function Repertoire() {
  const repertoire = useFetch(`${process.env.REACT_APP_API_URL}/repertoire`);
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/repertoire`);

  useEffect(() => {
    if (content?.response) {
      document.title =
        content?.response?.meta?.title || process.env.REACT_APP_TITLE;
    }
    meta('name', 'description', content?.response?.meta?.description);
  }, [content]);

  return repertoire?.error || content?.error ? (
    <FailedToLoad />
  ) : (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        <UnorderedList>
          {repertoire?.response
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
    </Fragment>
  );
}
