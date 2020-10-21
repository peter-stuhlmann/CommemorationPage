import React from 'react';
import styled from 'styled-components';

import { Heading } from './Headings';

export default function HeaderImage(props) {
  const { content } = props;

  return (
    <StyledHeaderImage backgroundImage={content.response?.img.size}>
      <div>
        <div>
          {content.response?.title && (
            <Heading h1 title={content.response.title} />
          )}
          {content.response?.subTtitle && <p>{content.response.subTtitle}</p>}
        </div>
      </div>
    </StyledHeaderImage>
  );
}

const StyledHeaderImage = styled.header`
  background-image: url(${(props) => props.backgroundImage?.large});
  background-position: top;
  background-size: cover;
  height: 400px;
  width: 100%;

  & > div {
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    div {
      text-align: center;

      h1 {
        color: #fff;
        font-size: 60px;
        margin: 16px;
      }

      p {
        color: #fff;
      }
    }
  }
`;
