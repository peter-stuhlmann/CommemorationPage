import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { NavLink } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { colors, font } from '../helpers/variables';
import useDimensions from '../helpers/useDimensions';

export default function Footer() {
  const [ref, { height }] = useDimensions();

  const RootStyles = createGlobalStyle`
    #root {
      padding-bottom: ${height}px; // footer height
    }
  `;

  const currentYear =
    new Date().getFullYear() !== 2020 ? ` - ${new Date().getFullYear()}` : null;

  return (
    <StyledFooter ref={ref}>
      <RootStyles />
      <Container footer full>
        <Copyright>&copy; 2020 {currentYear} Tabea Zimmermann</Copyright>
        <Navigation>
          <NavLink to="/legal-notice">Legal notice</NavLink>
          <NavLink to="/privacy-policy">Privacy policy</NavLink>
        </Navigation>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: ${colors.senary};
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Copyright = styled.p`
  color: ${font.color.quaternary};
  margin: 0;
  padding: 6px 0;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    text-align: center;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  a {
    color: ${font.color.quaternary};
    padding: 6px 11px;

    &.active {
      font-weight: bold;
    }

    // @media (max-width: 768px) {
    //   flex: 0 0 100%;
    //   text-align: center;
    // }
  }
`;
