import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Heading } from './Headings';
import { screen, font } from '../helpers/variables';

export default function HeaderImage(props) {
  const { data } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const headerImage = React.createRef();

  useEffect(() => {
    const updateBackgroundPosition = () => {
      if (headerImage.current) {
        headerImage.current.style.backgroundPositionY = `${
          window.pageYOffset * 0.3
        }px`;
      }
    };

    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowWidth);
    window.addEventListener('scroll', updateBackgroundPosition);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
      window.removeEventListener('scroll', updateBackgroundPosition);
    };
  }, [headerImage]);

  return (
    <StyledHeaderImage
      ref={headerImage}
      backgroundImage={data.response?.img?.size}
      width={windowWidth}
    >
      <div>
        <div>
          {data.response?.title && <Heading h1 title={data.response.title} />}
          {data.response?.subTtitle && <p>{data.response.subTtitle}</p>}
        </div>
      </div>
    </StyledHeaderImage>
  );
}

const StyledHeaderImage = styled.header`
  background-image: url(/img/headerimages/${(props) =>
    props.backgroundImage?.large});
  background-position: top;
  background-size: cover;
  height: calc(${(props) => props.width}px / 4.5);
  width: 100%;

  @media (max-width: ${screen.desktop}) {
    height: calc(${(props) => props.width}px / 4);
  }

  @media (max-width: ${screen.tablet}) {
    background-image: url(/img/headerimages/${(props) =>
      props.backgroundImage?.medium});
    height: calc(${(props) => props.width}px / 3);
  }

  @media (max-width: ${screen.mobile}) {
    background-image: url(/img/headerimages/${(props) =>
      props.backgroundImage?.small});
    height: calc(${(props) => props.width}px / 2);
  }

  & > div {
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    div {
      text-align: center;
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);

      h1 {
        color: #fff;
        font-size: calc(${font.size.normal} * 3);
        margin: 16px;

        @media (max-width: ${screen.tablet}) {
          font-size: calc(${font.size.normal} * 2.5);
        }

        @media (max-width: ${screen.mobile}) {
          font-size: calc(${font.size.normal} * 2);
        }
      }

      p {
        color: #fff;
      }
    }
  }
`;
