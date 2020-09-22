import React from 'react';
import styled from 'styled-components';

import { useFetch } from '../helpers/useFetch';
import { link, screen, transition } from '../helpers/variables';

export default function Home() {
  const content = useFetch('https://david-shallon-api.vercel.app/pages/home');

  return (
    <StyledHome
      dangerouslySetInnerHTML={{ __html: content?.response?.content }}
    />
  );
}

const StyledHome = styled.div`
  .entry {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: space-between;
  }

  .left-column {
    background-size: cover;
    display: flex;
    flex: 0 0 40%;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 54px);
    padding: 16px;

    @media (max-width: 930px) {
      flex: 0 0 100%;
    }

    img {
      box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.6);
      max-height: 75vh;
      max-width: 100%;
      border-radius: 10px;
    }
  }

  .right-column {
    color: #000;
    flex: 0 0 60%;
    height: calc(100vh - 54px);
    padding: calc(15vh - 27px) 16px calc(15vh - 27px) 50px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 930px) {
      flex: 0 0 100%;
      height: auto;
      align-items: center;
      padding: 16px;
    }

    .entry-content {
      display: inline-block;
      text-align: center;
    }

    h1 {
      font-size: 130px;
      margin-bottom: 40px;

      @media (max-width: 1650px) {
        font-size: 100px;
      }

      @media (max-width: 1400px) {
        font-size: 70px;
      }
    }

    .data {
      font-size: 50px;

      @media (max-width: 1650px) {
        font-size: 40px;
      }

      @media (max-width: 1400px) {
        font-size: 30px;
      }
    }
  }

  .container {
    margin: 70px auto;
    max-width: ${screen.desktop};
    padding: 16px;
    width: 100%;

    @media (max-width: 930px) {
      margin: 0 auto 50px 0;
    }

    h1 {
      margin-bottom: 50px;
    }

    h2 {
      margin: 70px 0 35px 0;
    }

    a {
      color: ${link.primary};
      text-decoration: none;
      transition: ${transition.fast};

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
