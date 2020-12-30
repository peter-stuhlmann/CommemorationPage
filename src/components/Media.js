import React, { useEffect } from 'react';

import { Container } from './Container';
import { useFetch } from '../helpers/useFetch';
import { meta } from '../helpers/meta';
import styled from 'styled-components';

export default function Media() {
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/media`);

  useEffect(() => {
    if (content?.response) {
      document.title =
        content?.response?.meta?.title || process.env.REACT_APP_TITLE;
    }
    meta('name', 'description', content?.response?.meta?.description);
  }, [content]);

  return (
    <StyledContainer>
      <iframe
        title="Remembering David Shallon"
        src="https://www.youtube-nocookie.com/embed/TGOqJ93AyZs"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  height: 0;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 658.125px;
    border-radius: 4px;
  }
`;
