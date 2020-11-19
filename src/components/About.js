import React, { Fragment } from 'react';
import styled from 'styled-components';

import { useFetch } from '../helpers/useFetch';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import HeaderImage from './HeaderImage';
import { font, screen } from '../helpers/variables';
import { PdfIcon } from '../components/Icons';

export default function About() {
  const data = useFetch(`${process.env.REACT_APP_API_URL}/cv`);
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/about`);

  return data?.error || content?.error ? (
    <FailedToLoad />
  ) : (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        {data.response?.map((cv) => {
          return (
            <StyledList key={cv.year}>
              <div>{cv.year}</div>
              <ul>
                {cv.events.map((event) => (
                  <li key={event.title}>
                    <p>
                      {event.date}, {event.title}
                    </p>
                    
                    {event.media.pdf?.map((pdf) => (
                      <Fragment>
                        <a 
                          href={pdf.path} 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <PdfIcon /> {pdf.title} (PDF{pdf.language && `, ${pdf.language}`})
                        </a>
                        {event.media.img && <br />}
                      </Fragment>
                    ))}

                    {event.media.img?.map((img) => (
                      <img
                        src={img.path.large}
                        srcSet={`${img.path.small} ${screen.mobile}w, ${img.path.medium} ${screen.tablet}w, ${img.path.large} ${screen.desktop}w`}
                        alt={img.title}
                        title={img.title}
                        loading="lazy"
                      />
                    ))}
                  </li>
                ))}
              </ul>
            </StyledList>
          );
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

      svg {
        height: ${font.size.normal};
        margin-bottom: 3px;
        margin-right: 0.5em;
      }

      img {
        margin-top: 16px;
        max-width: 100%;
      }
    }
  }
`;
