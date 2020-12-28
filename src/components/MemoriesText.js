import React from 'react';
import styled from 'styled-components';
import { screen } from '../helpers/variables';

export default function MemoriesText(props) {
  const { author, content, textRef } = props;

  return (
    author != null && (
      <StyledMemoriesText ref={textRef}>
        {content[author].text.map((paragraph, i) => (
          <p
            key={`paragraph${i}`}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
        <hr />
      </StyledMemoriesText>
    )
  );
}

const StyledMemoriesText = styled.article`
  padding-top: 32px;
  margin: 32px 0 48px;

  h2 {
    margin-top: 0;
  }

  @media (min-width: ${screen.desktop}) {
    padding-top: 64px;
    margin-top: 0;

    p:first-child {
      margin-top: 32px;
    }
  }
`;
