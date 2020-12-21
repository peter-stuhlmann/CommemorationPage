import React, { Fragment, useEffect } from 'react';

import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { useFetch } from '../helpers/useFetch';
import { meta } from '../helpers/meta';

export default function Media() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/media`);

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
        <p>Media</p>
      </Container>
    </Fragment>
  );
}
