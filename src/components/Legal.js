import React, { Fragment } from 'react';

import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { useFetch } from '../helpers/useFetch';
import { FailedToLoad } from './Messages';
import { meta } from '../helpers/meta';

export default function Legal() {
  let api;

  switch (window.location.pathname) {
    case '/legal-notice':
      api = `${process.env.REACT_APP_API_URL}/pages/legal-notice`;
      break;
    case '/privacy-policy':
      api = `${process.env.REACT_APP_API_URL}/pages/privacy-policy`;
      break;
    default:
  }
  const content = useFetch(api);

  document.title = content?.response?.meta?.title;
  meta('name', 'description', content?.response?.meta?.description);

  return content?.error ? (
    <FailedToLoad />
  ) : (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: content?.response?.content }} />
      </Container>
    </Fragment>
  );
}
