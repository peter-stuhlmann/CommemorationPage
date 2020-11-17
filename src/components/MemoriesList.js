import React from 'react';
import styled from 'styled-components';

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
    flex: 0 0 15%;
    list-style-type: none;
    margin-right: 16px;
    text-align: center;

    img {
      border-radius: 50%;
      width: 100%;
    }
  }
`;