import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { colors } from '../helpers/variables';

const ArrowTopIcon = () => {
  return (
    <svg viewBox="0 0 24 24" style={{ width: '40px' }}>
      <path
        fill={colors.secondary}
        d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
      ></path>
    </svg>
  );
};

export default function ScrollToTop(props) {
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = () => window.scrollTo(0, 0);

  // scroll top on route change
  useEffect(() => {
    scroll();
  }, [pathname]);

  useScrollPosition(({ prevPos, currPos }) => {
    setScrollPosition(currPos.y);
  });

  const { label } = props;

  return (
    <ScrollToTopButton
      type="button"
      onClick={scroll}
      aria-label="scroll to top"
      style={{
        visibility: scrollPosition < -300 ? 'visible' : 'hidden',
        transform: scrollPosition < -300 ? 'none' : 'scale(0)',
      }}
    >
      <span>{label || <ArrowTopIcon />}</span>
    </ScrollToTopButton>
  );
}

const ScrollToTopButton = styled.button`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  padding: 0;
  font-size: 14px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    visibility 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: none;
  border-radius: 50%;
  background-color: ${colors.primary};
  position: fixed;
  bottom: 20px;
  right: 20px;

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: #212223;
  }
`;
