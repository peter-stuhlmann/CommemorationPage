import { createGlobalStyle } from 'styled-components';
import { colors, font } from '../helpers/variables';
import LatoRegular from '../assets/fonts/lato/lato-regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lato Regular';
    src: url(${LatoRegular});
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colors.tertiary};
    color: ${font.color.primary};
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
  }
`;
