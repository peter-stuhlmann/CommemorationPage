import { createGlobalStyle } from 'styled-components';
import { font } from '../helpers/variables';
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
    color: ${font.color.primary};
    font-size: ${font.size.normal};
    line-height: 1.6em;
    margin: 0;
    font-family: ${font.family.primary};
  }
`;
