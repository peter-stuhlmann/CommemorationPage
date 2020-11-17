import React from 'react';
import styled from 'styled-components';
import { screen } from '../helpers/variables';

export default function MemoriesList(props) {
  const { content, setAuthor } = props;
  
  return (
    content.response 
    ? <StyledMemoriesList>
        {content.response.map((memory, index) => (
          <li key={memory.author.name.lastName} onClick={() => setAuthor(index)}>
            <div>
              <img src={'/img/' + memory.author.avatar.src} alt={memory.author.avatar.alt} title={`${memory.author.name.firstName} ${memory.author.name.lastName} | (c) ${memory.author.avatar.copyright}`} />
            </div>
            <div>
              {memory.author.name.firstName} {memory.author.name.lastName}
            </div>
          </li>
        ))}
      </StyledMemoriesList>
    : "Loading ..."
  )
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

    @media (max-width: calc(${screen.tablet} - 1px)) {
      flex: 0 0 33.333%;
    }

    @media (max-width: calc(${screen.mobile} - 1px)) {
      flex: 0 0 50%;
    }

    div {
      img {
        border-radius: 50%;
        width: 100%;
      }
    }
  }
`;