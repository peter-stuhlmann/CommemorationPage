import React, { Fragment, useEffect } from 'react';
import FlexCards from 'flex-cards';
import styled from 'styled-components';

import { useFetch } from '../helpers/useFetch';
import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import { screen } from '../helpers/variables';
import { meta } from '../helpers/meta';
import Spinner from './Spinner';

export default function Discography() {
  const albums = useFetch(`${process.env.REACT_APP_API_URL}/discography`);
  const content = useFetch(
    `${process.env.REACT_APP_API_URL}/pages/discography`
  );

  const albumCover = albums?.response?.map((album) => {
    const cover = {
      img: {
        src:
          (window.innerWidth >= parseInt(screen.mobile) &&
            window.innerWidth <= 600) ||
          window.innerWidth >= parseInt(screen.tablet)
            ? '/img/covers/square/' + album.cover.format.square.medium
            : '/img/covers/square/' + album.cover.format.square.large,
        alt: album.title,
      },
      href: '/discography/' + album.number.toString(),
    };
    return cover;
  });

  useEffect(() => {
    if (content?.response) {
      document.title =
        content?.response?.meta?.title || process.env.REACT_APP_TITLE;
    }
    meta('name', 'description', content?.response?.meta?.description);
  }, [content]);

  return albums?.error || content?.error ? (
    <FailedToLoad />
  ) : albums?.response ? (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        {albumCover && <StyledFlexCards cards={albumCover} noTextbox noLabel />}
      </Container>
    </Fragment>
  ) : (
    <Spinner />
  );
}

const StyledFlexCards = styled(FlexCards)`
  li {
    cursor: pointer;

    div {
      width: 100%;
      padding-top: 100%;
    }

    img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;
