import React, { Fragment } from 'react';

import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { useFetch } from '../helpers/useFetch';
import { meta } from '../helpers/meta';

export default function Media() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/media`);

  document.title =
    content?.response?.meta?.title || process.env.REACT_APP_TITLE;
  meta('name', 'description', content?.response?.meta?.description);

  return (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        <p>Media</p>
      </Container>
    </Fragment>
  );
}
