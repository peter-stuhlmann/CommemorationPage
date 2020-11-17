import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

import { font, screen } from '../helpers/variables';

export default function MemoriesAuthorBio(props) {
  const { author, content } = props;

  return (
    author != null && 
      <StyledPaper elevation={3}> 
        <div><img src={'/img/' + content.response[author]?.author?.img.src.medium} alt={content.response[author]?.author?.img.alt || ""} /></div>
        <div>
          {content.response[author]?.author?.biography.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
          <p>Photo: {content.response[author]?.author?.img.copyright}</p>
        </div>
      </StyledPaper>
  )
}

const StyledPaper = styled(Paper)`
  display: flex;
  flex-flow: row wrap;
  padding: 16px;

  div {
    &:first-child {
      max-width: 350px;
      width: 100%;
      margin-right: 16px;

      @media (max-width: calc(${screen.tablet} - 1px)) {
        max-width: 280px;
      }

      @media (max-width: 666px) {
        max-width: 200px;
      }

      @media (max-width: calc(${screen.mobile} - 1px)) {
        max-width: 100%;
        margin-right: 0;
        margin-bottom: 16px;
      }

      img {
        width: 100%;
      }
    }

    &:last-child {
      flex: 1;

      p {
        &:last-child {
          color: ${font.color.tertiary};
          margin-bottom: 0;
        }
      }
    }
  }
`;