import React from 'react';
import styled from 'styled-components';

export default function MemoriesText(props) {
  const { author, content } = props;

  return (
    author != null && (
      <StyledMemoriesText>
        {content[author].text.map((paragraph) => (
          <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
        <hr />
      </StyledMemoriesText>
    )
  );
}

const StyledMemoriesText = styled.article`
  margin-top: 64px;
  margin-bottom: 48px;
`;
