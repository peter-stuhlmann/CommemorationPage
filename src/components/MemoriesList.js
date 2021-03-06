import React from 'react';
import styled from 'styled-components';
import { boxShadow, screen } from '../helpers/variables';

export default function MemoriesList(props) {
  const { content, author, handleClick } = props;

  return content ? (
    <StyledMemoriesList>
      {content?.map((memory, index) => (
        <li
          key={memory.author.name.lastName}
          onClick={() => {
            handleClick(index);
          }}
          className={author === index ? 'active' : null}
        >
          <div>
            <div className="image-placeholder" />
            <img
              src={'/img/memories/' + memory.author.avatar.src}
              alt={memory.author.avatar.alt}
              title={`${memory.author.name.firstName} ${memory.author.name.lastName} | (c) ${memory.author.avatar.copyright}`}
            />
          </div>
          <div>
            {memory.author.name.firstName} {memory.author.name.lastName}
          </div>
        </li>
      ))}
    </StyledMemoriesList>
  ) : (
    'Loading ...'
  );
}

const StyledMemoriesList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 0;

  li {
    cursor: pointer;
    display: flex;
    flex: 0 0 16.666%;
    flex-direction: column;
    list-style-type: none;
    margin-bottom: 16px;
    padding: 8px;
    text-align: center;

    &.active {
      font-weight: bold;

      img {
        box-shadow: ${boxShadow.primary};
      }
    }

    @media (max-width: calc(${screen.tablet} - 1px)) {
      flex: 0 0 33.333%;
    }

    @media (max-width: calc(${screen.mobile} - 1px)) {
      flex: 0 0 50%;
    }

    div:first-child {
      position: relative;
      padding-top: 100%;

      img,
      .image-placeholder {
        border-radius: 50%;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
`;
