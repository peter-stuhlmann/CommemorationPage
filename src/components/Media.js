import React from 'react';

import { useFetch } from '../helpers/useFetch';
import { meta } from '../helpers/meta';

export default function Media() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/media`);

  document.title = content?.response?.meta?.title;
  meta('name', 'description', content?.response?.meta?.description);

  return <div className="App">Media</div>;
}
