import { createGlobalStyle } from 'styled-components';

import {
  boxShadow,
  colors,
  font,
  transition,
  screen,
} from '../helpers/variables';
import LatoRegular from '../assets/fonts/lato/lato-regular.ttf';
import KalamRegular from '../assets/fonts/kalam/kalam-regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lato Regular';
    src: url(${LatoRegular}) format("truetype");
  }

  @font-face {
    font-family: 'Kalam Regular';
    src: url(${KalamRegular}) format("truetype");
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colors.senary};
    color: ${font.color.senary};
    font-size: ${font.size.normal};
    line-height: 1.6em;
    margin: 0;
    font-family: ${font.family.primary};

    #root {
      min-height: 100vh;
      position: relative;
      // padding bottom is defined in Footer.js (= height of footer)
    }

    img, .image-placeholder {
      -webkit-user-select: none;
      -webkit-touch-callout: none;

      background: linear-gradient(
        309deg,
        #f9f7f7,
        #c3c3c3,
        #d9d9d9,
        #f9f7f7,
        #d9d9d9,
        #c3c3c3,
        #f9f7f7
      );
      background-size: 1000% 1000%;

      -webkit-animation: loading 5s ease infinite;
      -moz-animation: loading 5s ease infinite;
      -o-animation: loading 5s ease infinite;
      animation: loading 5s ease infinite;
      @-webkit-keyframes loading {
        0% {
          background-position: 100% 67%;
        }
        100% {
          background-position: 0% 33%;
        }
      }
      @-moz-keyframes loading {
        0% {
          background-position: 100% 67%;
        }
        100% {
          background-position: 0% 33%;
        }
      }
      @-o-keyframes loading {
        0% {
          background-position: 100% 67%;
        }
        100% {
          background-position: 0% 33%;
        }
      }
      @keyframes loading {
        0% {
          background-position: 100% 67%;
        }
        100% {
          background-position: 0% 33%;
        }
      }
    }

    button {
      background-color: ${colors.secondary};
      border: 0;
      border-radius: 4px;
      box-shadow: ${boxShadow.primary};
      box-sizing: border-box;
      color: ${font.color.quinary};
      font-size: ${font.size.small};
      letter-spacing: 0.05em;
      padding: 6px 16px;
      transition: ${transition.normal};
      text-transform: uppercase;

      &:hover {
        opacity: 0.85;
      }

      &:focus {
        outline: none;
      }
    }

    blockquote {
      color: ${font.color.quinary} !important;
      font-family: ${font.family.secondary};
      font-size: calc(${font.size.normal} * 2);
      line-height: 1.3;
      text-align: center;

      @media (max-width: ${screen.tablet}) {
        font-size: calc(${font.size.normal} * 1.5);
      }

      span {
        color: ${font.color.quaternary};
        display: block;
        font-family: ${font.family.primary};
        font-size: ${font.size.normal};
        margin-top: 1em;
      }
    }

    [class^="react-images"] {
      button {
        box-shadow: none
      }

      // Lightbox image
      .css-1cm5myo {
        max-height: calc(100vh - (2 * 16px));
      }
    }
  }
`;
