import React, { Fragment, useState } from 'react';

import { useFetch } from '../helpers/useFetch';
import { Container } from './Container';
import HeaderImage from './HeaderImage';
import MemoriesList from './MemoriesList';
import MemoriesAuthorBio from './MemoriesAuthorBio';
import MemoriesText from './MemoriesText';
import { FailedToLoad } from './Messages';

export default function Memories() {
  const headerImage = useFetch(`${process.env.REACT_APP_API_URL}/pages/memories`);
  const content = useFetch(`${process.env.REACT_APP_API_URL}/memories`);

  const [author, setAuthor] = useState(null)

  return (
    <Fragment>
      {headerImage?.error 
        ? <FailedToLoad />
        : <HeaderImage data={headerImage} />
      }
    
      {content?.error 
        ? <FailedToLoad />
        : content?.response 
          ? <Container>
              <MemoriesList author={author} setAuthor={setAuthor} content={content} />
              <MemoriesText author={author} content={content} />
              <MemoriesAuthorBio author={author} content={content} />
            </Container>
          : "Loading..."
        }
    </Fragment>
  );
}