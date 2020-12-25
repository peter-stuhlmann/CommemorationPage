import React, { useEffect, useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import { screen } from '../helpers/variables';
import { Link } from 'react-router-dom';
import styledcss from 'styled-components';

import { useFetch } from '../helpers/useFetch';
import { Container } from './Container';
import { Heading } from './Headings';

function FlexCard(props) {
  const { card, mobileBreakpoint, tabletBreakpoint } = props;

  return (
    <StyledFlexCard
      mobileBreakpoint={mobileBreakpoint}
      tabletBreakpoint={tabletBreakpoint}
    >
      <Link to={card.href}>
        <div>
          <img src={card.img.src} alt={card.img.alt || card.title} />
        </div>
      </Link>
    </StyledFlexCard>
  );
}

export default function CdTabs({ current }) {
  const albums = useFetch(`${process.env.REACT_APP_API_URL}/discography`)
    .response;

  const [albumCovers, setAlbumCovers] = useState([]);
  useEffect(() => {
    const covers = albums?.map((album) => {
      const cover = {
        number: album.number,
        img: {
          src: '/img/covers/square/' + album.cover.format.square.small,
          alt: album.title,
        },
        href: '/discography/' + album.number.toString(),
      };
      return cover;
    });
    setAlbumCovers(covers);
  }, [albums]);

  return (
    <Container margin={screen.desktop ? '0 auto 50px' : null} padding="16px 0">
      {albumCovers && (
        <>
          <Container margin>
            <hr />
            <Heading h3 title="More albums" />
          </Container>
          <StyledTabs
            value={
              current === albumCovers.length
                ? 0
                : albumCovers.length - current - 1
            }
            variant="scrollable"
            scrollButtons="on"
            aria-label="scrollable cd tabs"
          >
            {albumCovers.length > 0 &&
              albumCovers
                .filter((album) => album.number !== current)
                .map((album) => {
                  return (
                    <FlexCard
                      key={`album=${album.number}`}
                      card={album}
                      id={`scrollable-auto-tab-${album.number}`}
                      aria-controls={`scrollable-auto-tabpanel-${album.number}`}
                    />
                  );
                })}
          </StyledTabs>
        </>
      )}
    </Container>
  );
}

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    opacity: 0,
  },
});

const StyledFlexCard = styledcss.div`
  background-color: #fff;
  box-sizing: border-box;

    div {
      border-radius: 4px;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      overflow: hidden;
      padding: 0;

      margin: 10px;
      width: 100px;

      @media (min-width: ${(props) => props.tabletBreakpoint || '768px'}) {
        width: 200px;
        margin: 20px;
      }

      @media (min-width: ${(props) => props.mobileBreakpoint || '480px'}) {
        width: 150px;
      }

      img {
        border-radius: 4px;
        object-fit: cover;
        transition: 0.2s;
        height: 100%;
        width: 100%;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
`;
