import React, { Fragment, useEffect } from 'react';

import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { useFetch } from '../helpers/useFetch';
import { meta } from '../helpers/meta';

export default function Press() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/press`);

  useEffect(() => {
    if (content?.response) {
      document.title =
        content?.response?.meta?.title || process.env.REACT_APP_TITLE;
    }
    meta('name', 'description', content?.response?.meta?.description);
  }, [content]);

  return (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        <p>Press</p>
      </Container>
    </Fragment>
  );
}
