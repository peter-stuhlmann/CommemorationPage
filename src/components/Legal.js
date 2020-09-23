import React from 'react';

import { Heading } from './Headings';
import { Container } from './Container';
import { useFetch } from '../helpers/useFetch';

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

  return (
    <Container>
      <Heading h1 title={content?.response?.title} />
      <div dangerouslySetInnerHTML={{ __html: content?.response?.content }} />
    </Container>
  );
}
