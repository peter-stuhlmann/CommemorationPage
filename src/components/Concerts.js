import React, { Fragment } from 'react';
import FlexCards from 'flex-cards';
import styled from 'styled-components';

import { Heading } from './Headings';
import { Container } from './Container';
import { useFetch } from '../helpers/useFetch';
import { FailedToLoad } from './Messages';
import { colors, font, screen } from '../helpers/variables';

export default function Concerts() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/concerts`);
  const cards = useFetch(`${process.env.REACT_APP_API_URL}/cards?tags=concerts`);

  return content?.error ? (
    <FailedToLoad />
  ) : (
    <Fragment>
      <Container margin="50px auto 0 auto">
        <Heading h1 title={content.response?.title} />
        <div dangerouslySetInnerHTML={{ __html: content.response?.content[0]}} />
      </Container>
      {cards.response && (
        <StyledFlexCards
          cards={cards.response}
          maxWidth={screen.desktop}
          containerColor="transparent"
        />
      )}
      <Container>
        <div dangerouslySetInnerHTML={{ __html: content.response?.content[1]}} />
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
