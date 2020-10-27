import React, { Fragment } from 'react';
import styled from 'styled-components';

import { useFetch } from '../helpers/useFetch';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import HeaderImage from './HeaderImage';
import { font } from '../helpers/variables';

const PdfIcon = () => {
  return (
    <svg viewBox="0 0 384 512" style={{ height: font.size.normal, marginBottom: '3px' }}>
      <path
        fill={font.color.primary}
        d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z"
      ></path>
    </svg>
  );
};

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
                        {mediaItem.format === "pdf" && <a href={mediaItem.path}><PdfIcon /> {mediaItem.title} (PDF)</a>}
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
