import React, { Fragment } from 'react';

import { useFetch } from '../helpers/useFetch';
import { Container } from './Container';
import HeaderImage from './HeaderImage';

export default function Memories() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/memories`);

  return (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        <p>Lorem ipsum.</p>
      </Container>
    </Fragment>
  );
}