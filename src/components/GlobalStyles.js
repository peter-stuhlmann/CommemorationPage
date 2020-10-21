import { createGlobalStyle } from 'styled-components';
import { boxShadow, colors, font, transition } from '../helpers/variables';
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
    background-color: ${colors.senary};
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

    button {
      background-color: ${colors.secondary};
      border: 0;
      border-radius: 4px;
      box-shadow: ${boxShadow.primary};
      box-sizing: border-box;
      color: ${font.color.quinary};
      font-size: ${font.size.small};
      letter-spacing: 0.05em;
      margin: 8px;
      padding: 6px 16px;
      transition: ${transition.normal};;
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
      text-align: center;

      span {
        color: ${font.color.quaternary};
        display: block;
        font-family: ${font.family.primary};
        font-size: ${font.size.normal};
        margin-top: 1em;
      }
    }
  }
`;
