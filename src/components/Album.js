import React, { Fragment } from 'react';

import { useFetch } from '../helpers/useFetch';
import { FailedToLoad } from './Messages';

export default function Album() {
  const albums = useFetch(`${process.env.REACT_APP_API_URL}/discography`);
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/discography`);

  return albums?.error || content?.error ? (
    <FailedToLoad />
  ) : (
    <Fragment>
      Album
    </Fragment>
  );
}