import React, { Fragment } from 'react';
import styled from 'styled-components';

import { useFetch } from '../helpers/useFetch';
import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import { Heading } from './Headings';
import { font } from '../helpers/variables';

export default function Album() {
  const album = useFetch(`${process.env.REACT_APP_API_URL}${window.location.pathname}`).response;
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/discography`);

  return album?.error || content?.error ? (
    <FailedToLoad />
  ) : (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
            {album && <StyledAlbum key={album.number}>
              <div>
                <img src={'/' + album.img.large} alt={`${album.number} | ${album.title}`} />
              </div>
              <div>
                <Heading h2 title={album.title} />
                <div className="meta">{album.format} &middot; {album.year}</div>
                <div>
                  <Heading h3 title="Contributing artists" />
                  <ul className="artists">
                    {album.contributingArtists.map((contributingArtist) => (
                      <li key={contributingArtist.name}>{contributingArtist.name}, <i>{contributingArtist.instrument}</i></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Heading h3 title="Works" />
                  <ul>
                    {album.composer.map((composer) => (
                      <li key={composer.name}>
                        {composer.name} <i>({composer.years})</i>
                        <ul className="works">
                          {composer.works.map((work) => (
                            <li key={work.title}>
                              <div dangerouslySetInnerHTML={{ __html: work.title }} />
                              <ol>
                                {work.movements.map((movement) => (
                                  <li key={movement} dangerouslySetInnerHTML={{ __html: movement }} />
                                ))}
                              </ol>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <hr />
                <div className="meta">Published {album.year} &middot; {album.label}</div>
              </div>
            </StyledAlbum>}
      </Container>
    </Fragment>
  );
}

const StyledAlbum = styled.li`
  display: flex;

  div {
    &:first-child {
      flex: 0 0 300px;
      margin-right: 1em;

      img {
        width: 100%;
      }
    }
  }

  h2 {
    margin: 0;
  }

  .meta {
    color: ${font.color.tertiary};
    font-size: ${font.size.small};
  }

  ul {
    margin: 0;
    padding: 0;

    &.artists {
      margin-bottom: 48px; 

      li {
        color: ${font.color.senary};
      }
    }

    &.works {
      margin-bottom: 24px;

      li {
        color: ${font.color.senary};
        font-size: ${font.size.normal};
      }
    }

    li {
      color: ${font.color.tertiary};
      font-size: ${font.size.normal};
      list-style-type: none;
    }
  }

  ol {
    li {
      color: ${font.color.tertiary};
      list-style-type: upper-roman;
    }
  }

  h3 {
    margin-top: 32px;
  }
`