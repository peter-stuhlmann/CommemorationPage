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
    src: url(${LatoRegular});
  }

  @font-face {
    font-family: 'Kalam Regular';
    src: url(${KalamRegular});
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

    img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
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
