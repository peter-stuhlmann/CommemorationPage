import React, { Fragment } from 'react';
import FlexCards from 'flex-cards';
import styled from 'styled-components';

import { useFetch } from '../helpers/useFetch';
import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import { screen } from '../helpers/variables';
import { meta } from '../helpers/meta';

export default function Discography() {
  const albums = useFetch(`${process.env.REACT_APP_API_URL}/discography`).response;
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/discography`);

  const albumCover = albums?.map((album) => {
    album.img.src = (window.innerWidth >= parseInt(screen.mobile) && window.innerWidth <= 600) || (window.innerWidth >= parseInt(screen.tablet)) ? '/img/covers/' + album.img.medium : '/img/covers/' + album.img.large;
    album.img.alt = album.title;
    album.href = '/discography/' + album.number.toString();
    return album;
  });

  document.title = content?.response?.meta?.title;
  meta('name', 'description', content?.response?.meta?.description);

  return albums?.error || content?.error ? (
    <FailedToLoad />
  ) : (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        {albums && <StyledFlexCards cards={albumCover} noTextbox noLabel />}
      </Container>
    </Fragment>
  );
}

const StyledFlexCards = styled(FlexCards)`
  li {
    cursor: pointer
  }
`;