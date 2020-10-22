import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { colors, font } from '../helpers/variables';

const ArrowTopIcon = () => {
  return (
    <svg viewBox="0 0 24 24" style={{ width: '40px' }}>
      <path
        fill={font.color.quinary}
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

  useScrollPosition(({ currPos }) => {
    setScrollPosition(currPos.y);
  });

  const { label } = props;

  const footerStartsAtThisScrollPosition =
    (document.body.clientHeight - 72 - window.innerHeight) * -1;

  let bottom = 20;

  if (scrollPosition < footerStartsAtThisScrollPosition) {
    bottom =
      72 -
      (document.body.clientHeight - window.innerHeight + scrollPosition) +
      20;
  }

  return (
    <ScrollToTopButton
      type="button"
      onClick={scroll}
      aria-label="scroll to top"
      style={{
        visibility: scrollPosition < -300 ? 'visible' : 'hidden',
        transform: scrollPosition < -300 ? 'none' : 'scale(0)',
        bottom: bottom + 'px',
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
    filter: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    visibility 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: none;
  border-radius: 50%;
  background-color: ${colors.primary};
  position: fixed;
  right: 20px;
  transition: none;
  z-index: 1000;

  &:focus {
    outline: 0;
  }

  &:hover {
    filter: brightness(75%);
    opacity: 1;
  }
`;
