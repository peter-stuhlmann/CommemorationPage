import React, { Fragment } from 'react';
import FlexCards from 'flex-cards';

import { Heading } from './Headings';
import { Container } from './Container';
import { useFetch } from '../helpers/useFetch';
import { FailedToLoad } from './Messages';
import { screen } from '../helpers/variables';

export default function Concerts() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/cards`);

  return content?.error ? (
    <FailedToLoad />
  ) : (
    <Fragment>
      <Container margin="50px auto 0 auto">
        <Heading h1 title="Concerts" />
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </Container>
      {content.response && (
        <FlexCards
          cards={content.response}
          maxWidth={screen.desktop}
          containerColor="transparent"
        />
      )}
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </Container>
    </Fragment>
  );
}
