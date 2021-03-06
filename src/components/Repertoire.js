import React, { Fragment, useEffect } from 'react';

import { useFetch } from '../helpers/useFetch';
import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import { UnorderedList } from './StyledLists';
import { meta } from '../helpers/meta';
import { Heading } from './Headings';
import Spinner from './Spinner';

export default function Repertoire() {
  const premieres = useFetch(`${process.env.REACT_APP_API_URL}/premieres`);
  const repertoire = useFetch(`${process.env.REACT_APP_API_URL}/repertoire`);
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/repertoire`);

  useEffect(() => {
    if (content?.response) {
      document.title =
        content?.response?.meta?.title || process.env.REACT_APP_TITLE;
    }
    meta('name', 'description', content?.response?.meta?.description);
  }, [content]);

  return repertoire?.error || premieres?.error || content?.error ? (
    <FailedToLoad />
  ) : repertoire?.response || premieres?.response ? (
    <Fragment>
      <HeaderImage data={content} />
      {premieres?.response && (
        <Container>
          <Heading h2 title="World Premieres" />
          <UnorderedList>
            {premieres?.response
              ?.sort((a, b) => a.piece.plain - b.piece.plain)
              .map((premieres) => {
                return (
                  <li
                    key={premieres.id}
                    dangerouslySetInnerHTML={{ __html: premieres.piece.html }}
                  />
                );
              })}
          </UnorderedList>
        </Container>
      )}
      {repertoire?.response && (
        <Container>
          <Heading h2 title="Full Repertoire List" />
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
      )}
    </Fragment>
  ) : (
    <Spinner />
  );
}
