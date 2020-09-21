import styled from 'styled-components';
import { link, screen, transition } from '../helpers/variables';

export const Container = styled.div`
  margin: 50px auto;
  max-width: ${screen.desktop};
  padding: 16px;
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
`;
