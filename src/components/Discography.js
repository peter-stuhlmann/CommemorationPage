import React, { Fragment } from 'react';
import FlexCards from 'flex-cards';
import styled from 'styled-components';

import { useFetch } from '../helpers/useFetch';
import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { FailedToLoad } from './Messages';

export default function Discography() {
  const albums = useFetch(`${process.env.REACT_APP_API_URL}/discography`).response;
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/discography`);

  const albumCover = albums?.map((album) => {
    album.img.src = album.img.small;
    album.img.alt = album.title;
    album.href = '/discography/' + album.number.toString();
    return album;
  });

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