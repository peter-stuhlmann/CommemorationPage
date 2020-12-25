import styled from 'styled-components';
import { link, screen, transition } from '../helpers/variables';

export const Container = styled.div`
  position: relative;
  margin: ${(props) => props.margin || '50px auto'};
  max-width: ${(props) => (props.full ? `100%` : `${screen.desktop}`)};
  padding: ${(props) => props.padding || '16px'};
  width: 100%;

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

  ${(props) =>
    props.footer
      ? `display: flex; margin: 0 auto; padding: 16px; justify-content: space-between; flex-flow: row wrap; @media (max-width: ${screen.tablet}) { justify-content: center; }`
      : null}

  ${(props) =>
    props.fixedCenter
      ? `position: fixed; top: 0; bottom: 0; left: 0; right: 0;
      display: flex; justify-content: center; align-items: center
      `
      : null}

  ${(props) =>
    props.spinner
      ? `position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin:0;
      background-color: rgba(255,255,255,.8);
      display: flex; justify-content: center; align-items: center
      `
      : null}
`;
