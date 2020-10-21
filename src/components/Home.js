import React, { Fragment } from 'react';
import styled from 'styled-components';
import FlexCards from 'flex-cards';

import { useFetch } from '../helpers/useFetch';
import { colors, font, screen } from '../helpers/variables';
import { FailedToLoad } from './Messages';

export default function Home() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/start`);
  const cards = useFetch(`${process.env.REACT_APP_API_URL}/cards`);

  return content?.error ? (
    <FailedToLoad />
  ) : (
    <Fragment>
      <StyledHome
        dangerouslySetInnerHTML={{ __html: content?.response?.content }}
      />
      {cards.response && (
        <StyledFlexCards
          cards={cards.response}
          maxWidth={screen.desktop}
          cardColor={colors.quaternary}
        />
      )}
    </Fragment>
  );
}

const StyledHome = styled.div`
  .entry {
    background-image: url('./img/1999-david-in-birstein-1000x658.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    height: calc(100vh);
    width: 100%;

    .entry-content {
      color: ${font.color.quinary};
      padding: 80px;
      text-align: center;

      h1 {
        font-size: 90px;
      }

      p {
        font-size: 40px;
      }
    }
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
      }
    }

    div:nth-child(2) {
      flex: 0 0 50%;
      background-color: ${colors.senary};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;
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
`;
