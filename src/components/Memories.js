import React, { Fragment, useState, useEffect } from 'react';

import { useFetch } from '../helpers/useFetch';
import { Container } from './Container';
import HeaderImage from './HeaderImage';
import MemoriesList from './MemoriesList';
import MemoriesAuthorBio from './MemoriesAuthorBio';
import MemoriesText from './MemoriesText';
import { FailedToLoad } from './Messages';
import { meta } from '../helpers/meta';
import Spinner from './Spinner';

export default function Memories() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/memories`);
  const memories = useFetch(`${process.env.REACT_APP_API_URL}/memories`);

  const [author, setAuthor] = useState(null);

  useEffect(() => {
    if (content?.response) {
      document.title =
        content?.response?.meta?.title || process.env.REACT_APP_TITLE;
    }
    meta('name', 'description', content?.response?.meta?.description);
  }, [content]);

  return content?.error || memories?.error ? (
    <FailedToLoad />
  ) : memories?.response ? (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        <MemoriesList
          author={author}
          setAuthor={setAuthor}
          content={memories.response}
        />
        <MemoriesText author={author} content={memories.response} />
        <MemoriesAuthorBio author={author} content={memories.response} />
      </Container>
    </Fragment>
  ) : (
    <Spinner />
  );
}
