import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';

import { useFetch } from '../helpers/useFetch';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import HeaderImage from './HeaderImage';
import { font, screen } from '../helpers/variables';
import { PdfIcon } from '../components/Icons';
import { meta } from '../helpers/meta';

export default function About() {
  const data = useFetch(`${process.env.REACT_APP_API_URL}/cv`);
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/about`);

  useEffect(() => {
    if (content?.response) {
      document.title =
        content?.response?.meta?.title || process.env.REACT_APP_TITLE;
    }
    meta('name', 'description', content?.response?.meta?.description);
  }, [content]);

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
                  <li key={event.date + event.title}>
                    <p>
                      {event.date ? event.date + ', ' : ''}
                      {event.title}
                    </p>
                    <p>
                      {event.description?.split('\n').map((line) => (
                        <>
                          <small>{line}</small>
                          <br />
                        </>
                      ))}
                    </p>

                    {event.media?.pdf?.map((pdf) => (
                      <Fragment key={pdf.path}>
                        <a
                          href={'/pdf/' + pdf.path}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <PdfIcon /> {pdf.title} (PDF
                          {pdf.language && `, ${pdf.language}`})
                        </a>
                        {event.media.img && <br />}
                      </Fragment>
                    ))}

                    {event.media?.img?.map((img) => (
                      <img
                        key={img.path.large}
                        src={'/img/' + img.path.large}
                        srcSet={`/img/${img.path.small} ${parseInt(
                          screen.mobile
                        )}w, /img/${img.path.medium} ${parseInt(
                          screen.tablet
                        )}w, /img/${img.path.large} ${parseInt(
                          screen.desktop
                        )}w`}
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

      p {
        margin-bottom: 0.5em;
      }

      svg {
        height: ${font.size.normal};
        margin-bottom: 3px;
        margin-right: 0.5em;
      }

      img {
        margin-top: 16px;
        max-width: 700px;
      }
    }
  }
`;
