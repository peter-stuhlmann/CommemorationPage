import React, { Fragment } from 'react';
import styled from 'styled-components';

import { useFetch } from '../helpers/useFetch';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import HeaderImage from './HeaderImage';

export default function About() {
  const data = useFetch(`${process.env.REACT_APP_API_URL}/cv`);
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/about`);

  return data?.error ? (
    <FailedToLoad />
  ) : (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        {data.response?.map((cv) => {
          return (
            <StyledList>
              <div>{cv.year}</div>
              <ul>
                {cv.events.map((event) => (
                  <li>
                    <p>{event.date}, {event.title}</p>
                    {event.media.map((mediaItem) => (
                      <Fragment>
                        {mediaItem.format === "pdf" && <a href={mediaItem.path}>{mediaItem.title} (PDF)</a>}
                        {mediaItem.format === "jpg" && <img src={mediaItem.path} alt={mediaItem.title} title={mediaItem.title} />}               
                      </Fragment>
                    ))}
                  </li>
                ))}
              </ul>
            </StyledList>
          )
        })}
      </Container>
    </Fragment>
  );
}

const StyledList = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 32px;

  div {
    font-weight: bold;
    font-size: 21px;
    margin-right: 16px;
    padding: 16px 16px 16px 0;

    @media (max-width: 480px) {
      flex: 0 0 100%;
    }
  }

  ul { 
    flex: 1;
    margin-bottom: 0;
    padding: 0;
   
    @media (max-width: 480px) {
      flex: 0 0 100%;
    }

    @media (max-width: 480px) {
      flex: 0 0 100%;
    }

    li {
      border-left: 1px solid black;
      padding: 16px;
      list-style-type: none;
      margin-bottom: 16px;
      width: 100%;
      max-width: 700px;

      img {
        margin-top: 16px;
        max-width: 100%;
      }
    }
  }
`;
