import React from 'react';
import { Container } from './Container';

export function FailedToLoad() {
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <Container>
      <p>Oops! We couldn't load the requested page. Please try again in a few
      minutes.</p>
      <button type="button" onClick={() => refreshPage()}>Refresh</button>
    </Container>
  );
}
