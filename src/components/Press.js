import React, { Fragment } from 'react';

import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { useFetch } from '../helpers/useFetch';
import { meta } from '../helpers/meta';

export default function Press() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/press`);

  document.title =
    content?.response?.meta?.title || process.env.REACT_APP_TITLE;
  meta('name', 'description', content?.response?.meta?.description);

  return (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        <p>Press</p>
      </Container>
    </Fragment>
  );
}
