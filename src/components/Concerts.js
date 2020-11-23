import React, { Fragment } from 'react';
import FlexCards from 'flex-cards';
import styled from 'styled-components';

import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { useFetch } from '../helpers/useFetch';
import { FailedToLoad } from './Messages';
import { colors, font, screen } from '../helpers/variables';
import { meta } from '../helpers/meta';

export default function Concerts() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/concerts`);
  const cards = useFetch(
    `${process.env.REACT_APP_API_URL}/cards?tags=concerts`
  );
  const cardsOrder = ['Archive', 'Repertoire', 'Orchestras', 'Choirs'];

  document.title = content?.response?.meta?.title;
  meta('name', 'description', content?.response?.meta?.description);

  return content?.error || cards?.error ? (
    <FailedToLoad />
  ) : (
    <Fragment>
      <HeaderImage data={content} />
      <Container margin="50px auto 0 auto">
        {content?.response?.content?.slice(0,2).map((paragraph) => (
          <p dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </Container>
      {cards.response && (
        <StyledFlexCards
          cards={cards.response.sort(
            (a, b) => cardsOrder.indexOf(a.title) - cardsOrder.indexOf(b.title)
          )}
          maxWidth={screen.desktop}
          containerColor="transparent"
        />
      )}
      <Container>
        {content?.response?.content?.slice(2).map((paragraph) => (
          <p dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </Container>
    </Fragment>
  );
}

const StyledFlexCards = styled(FlexCards)`
  li {
    transition: 0.2s;

    &:hover {
      background-color: ${colors.secondary};

      h3,
      p {
        color: ${font.color.quinary};
      }
    }
  }
`;