import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';

import { useFetch } from '../helpers/useFetch';
import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import { Heading } from './Headings';
import { font, screen } from '../helpers/variables';
import { meta } from '../helpers/meta';
import CdTabs from './CdTabs';

export default function Album() {
  const album = useFetch(
    `${process.env.REACT_APP_API_URL}${window.location.pathname}`
  ).response;
  const content = useFetch(
    `${process.env.REACT_APP_API_URL}/pages/discography`
  );

  useEffect(() => {
    if (album) {
      document.title = album?.title || process.env.REACT_APP_TITLE;
      meta(
        'name',
        'description',
        album &&
          `David Shallon Discography: ${album.title}, ${album.year}, ${album.label}`
      );
    }
  }, [album]);

  const headerImageContent = {
    response: {
      title: content?.response?.title,
      subTtitle: album?.title,
      img: {
        size: {
          small: content?.response?.img.size.small,
          medium: content?.response?.img.size.medium,
          large: content?.response?.img.size.large,
        },
      },
    },
  };

  let albumcoverImage;
  if (window.innerWidth <= parseInt(screen.mobile)) {
    albumcoverImage = album?.cover.format.original.large;
  } else if (window.innerWidth <= 666) {
    albumcoverImage = album?.cover.format.original.small;
  } else if (window.innerWidth <= parseInt(screen.tablet)) {
    albumcoverImage = album?.cover.format.original.medium;
  } else {
    albumcoverImage = album?.cover.format.original.large;
  }

  return album?.error || content?.error ? (
    <FailedToLoad />
  ) : (
    <Fragment>
      <HeaderImage data={headerImageContent} />
      <Container>
        {album && (
          <StyledAlbum key={album.number}>
            <div>
              <img
                src={'/img/covers/' + albumcoverImage}
                alt={`${album.number} | ${album.title}`}
              />
            </div>
            <div>
              <Heading h2 title={album.title} />
              <div className="meta">
                {album.format} &middot; {album.year}
              </div>
              <div>
                <Heading h3 title="Contributing artists" />
                <ul className="artists">
                  {album.contributingArtists.map((contributingArtist) => (
                    <li key={contributingArtist.name}>
                      {contributingArtist.name},{' '}
                      <i>{contributingArtist.instrument}</i>
                    </li>
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
                            <div
                              dangerouslySetInnerHTML={{ __html: work.title }}
                            />
                            <ol>
                              {work.movements.map((movement) => (
                                <li
                                  key={movement}
                                  dangerouslySetInnerHTML={{ __html: movement }}
                                />
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
              <div className="meta">
                Published {album.year} &middot; {album.label}
              </div>
            </div>
          </StyledAlbum>
        )}
      </Container>
      {album && <CdTabs current={album.number} />}
    </Fragment>
  );
}

const StyledAlbum = styled.li`
  display: flex;
  flex-flow: row wrap;

  div {
    &:first-child {
      flex: 0 0 300px;
      margin-right: 1em;

      @media (max-width: calc(${screen.tablet} - 1px)) {
        flex: 0 0 200px;
      }

      @media (max-width: 666px) {
        flex: 0 0 150px;
      }

      @media (max-width: calc(${screen.mobile} - 1px)) {
        flex: 0 0 100%;
        margin-bottom: 32px;
      }

      img {
        width: 100%;
      }
    }

    &:nth-child(2) {
      flex: 0 0 calc(100% - 300px - 1em);

      @media (max-width: calc(${screen.tablet} - 1px)) {
        flex: 0 0 calc(100% - 200px - 1em);
      }

      @media (max-width: 666px) {
        flex: 0 0 calc(100% - 150px - 1em);
      }

      @media (max-width: calc(${screen.mobile} - 1px)) {
        flex: 0 0 100%;
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
    }
  }
`;
