import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import FlexCards from 'flex-cards';

import { useFetch } from '../helpers/useFetch';
import { colors, font, screen } from '../helpers/variables';
import { FailedToLoad } from './Messages';
import { meta } from '../helpers/meta';
import Spinner from './Spinner';

export default function Home() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/start`);
  const cards = useFetch(`${process.env.REACT_APP_API_URL}/cards?tags=home`);
  const cardsOrder = ['About', 'Discography', 'Gallery', 'Memoirs'];

  useEffect(() => {
    if (content?.response) {
      document.title =
        content?.response?.meta?.title || process.env.REACT_APP_TITLE;
    }
    meta('name', 'description', content?.response?.meta?.description);
  }, [content]);

  return content?.error ? (
    <FailedToLoad />
  ) : content?.response ? (
    <Fragment>
      <StyledHome
        dangerouslySetInnerHTML={{ __html: content?.response?.content }}
      />
      {cards.response && (
        <StyledFlexCards
          cards={cards.response.sort(
            (a, b) => cardsOrder.indexOf(a.title) - cardsOrder.indexOf(b.title)
          )}
          maxWidth={screen.desktop}
          cardColor={colors.quaternary}
        />
      )}
    </Fragment>
  ) : (
    <Spinner />
  );
}

const StyledHome = styled.div`
  .entry {
    background-image: url('/img/1999-david-in-birstein-1000x658.jpg');
    background-position: left center;
    background-size: cover;
    display: flex;
    align-items: center;
    height: calc(100vh - 64px);
    width: 100%;
    margin-bottom: -5px;

    @media (max-width: ${screen.desktop}) {
      align-items: flex-end;
      background-position: center;
      justify-content: center;
    }

    .entry-content {
      color: ${font.color.quinary};
      padding: 60px;
      text-align: center;
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);

      @media (max-width: ${screen.tablet}) {
        padding: 40px;
      }

      h1 {
        font-size: 90px;

        @media (max-width: 1800px) {
          font-size: 70px;
        }

        @media (max-width: ${screen.desktop}) {
          font-size: 70px;
        }

        @media (max-width: ${screen.tablet}) {
          font-size: 55px;
        }

        @media (max-width: ${screen.mobile}) {
          font-size: 45px;
        }
      }

      p {
        font-size: 38px;

        @media (max-width: ${screen.tablet}) {
          font-size: 30px;
        }

        @media (max-width: ${screen.mobile}) {
          font-size: 24px;
        }
      }
    }
  }

  .copyright {
    color: ${font.color.tertiary};
    font-size: 13px;
    padding: 16px;
  }

  .two-columns {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;

    div:first-child {
      background-color: ${colors.senary};
      flex: 0 0 50%;
      padding: 16px;

      img {
        width: 100%;
        height: calc(
          (50vw - 49px) * 616 / 850
        ); // refers specifically to the ratio of the current image
      }

      @media (max-width: ${screen.tablet}) {
        flex: 0 0 100%;
        img {
          height: calc(
            (100vw - 49px) * 616 / 850
          ); // refers specifically to the ratio of the current image
        }
      }
    }

    div:nth-child(2) {
      flex: 0 0 50%;
      background-color: ${colors.senary};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;
      padding: 16px;

      @media (max-width: ${screen.tablet}) {
        flex: 0 0 100%;
        margin-bottom: 40px;
      }
    }
  }

  .container {
    background-color: ${colors.tertiary};
    width: 100%;
    max-width: 100%;
    color: ${font.color.senary};
    padding: 16px;
  }

  .textblock {
    margin: 70px 0;
  }

  .wrapper {
    color: ${font.color.senary};
    margin: 0 auto;
    max-width: 1170px;
    padding: 16px;
    width: 100%;
  }

  .info {
    color: ${font.color.quinary};
    font-style: italic;
  }
`;

const StyledFlexCards = styled(FlexCards)`
  margin: 70px 0 30px 0;

  h3,
  p {
    color: ${font.color.quinary};
  }
`;
