import React, { Fragment } from 'react';

import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { useFetch } from '../helpers/useFetch';
import { meta } from '../helpers/meta';

export default function Foundation() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/foundation`);

  document.title = content?.response?.meta?.title;
  meta('name', 'description', content?.response?.meta?.description);

  return (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        <p>Foundation</p>
      </Container>
    </Fragment>
  );
}
