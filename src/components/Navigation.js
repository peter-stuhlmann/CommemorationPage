import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { colors, font, screen, transition } from '../helpers/variables';
import { Logo } from './Icons';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default function MainNavigation() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    setShow(currPos.y > prevPos.y);
  });

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledMainNavigation ref={node} className={show ? 'show' : null}>
      <ToggleButton open={open} setOpen={setOpen} />
      <div className="site-title-desktop" onClick={() => window.scrollTo(0, 0)}>
        <Link to="/">
          <Logo color={font.color.septenary} height="36" />
        </Link>
      </div>
      <Navbar open={open} setOpen={setOpen} />
      <div className="site-title-mobile" onClick={() => window.scrollTo(0, 0)}>
        <Link to="/">
          <Logo color={font.color.septenary} height="36" />
        </Link>
      </div>
      <Backdrop open={open} />
    </StyledMainNavigation>
  );
}

function Navbar({ open, setOpen }) {
  const routes = [
    { path: '/', exact: true, text: 'Home', disabled: false },
    { path: '/concerts', exact: false, text: 'Concerts', disabled: false },
    { path: '/gallery', exact: false, text: 'Gallery', disabled: false },
    { path: '/about', exact: false, text: 'About', disabled: false },
    {
      path: '/discography',
      exact: false,
      text: 'Discography',
      disabled: false,
    },
    // { path: 'media', exact: false, text: 'Media', disabled: true },
    // { path: 'press', exact: false, text: 'Press', disabled: true },
    // { path: 'foundation', exact: false, text: 'Foundation', disabled: true },
    {
      path: 'memories',
      exact: false,
      text: 'Memories',
      disabled: true,
    },
  ];

  return (
    <StyledNavbar open={open}>
      {routes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          onClick={() => setOpen(false)}
          exact={true}
          className={route.disabled ? 'disabled' : null}
        >
          {route.text}
        </NavLink>
      ))}
    </StyledNavbar>
  );
}

function ToggleButton({ open, setOpen }) {
  return (
    <StyledToggleButton
      open={open}
      onClick={() => setOpen(!open)}
      aria-label="Open Menu"
    >
      <div />
      <div />
      <div />
    </StyledToggleButton>
  );
}

const Backdrop = createGlobalStyle`
  body::after {
    background-color: rgba(0, 0, 0, 0.6);
    bottom: 0;
    content: '';
    left: 0;
    opacity: ${(props) => (props.open ? '1' : '0')};
    position: fixed;
    right: 0;
    top: 0;
    transform: ${(props) =>
      props.open ? 'translateX(0)' : 'translateX(calc(-100%))'};
    transition: opacity 0.3s ease-in-out;
    width: 100%;   
    z-index: 1020;
  }
`;

const StyledMainNavigation = styled.div`
  align-items: center;
  background-color: ${colors.senary};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  height: 64px;
  letter-spacing: 0.5px;
  padding: 16px;
  position: sticky;
  top: 0;
  z-index: 1021;
  transition: top 0.6s;
  top: 0;

  @media (max-width: calc(${screen.desktop} - 1px)) {
    top: -71px;
  }

  &.show {
    top: 0;
  }

  a {
    color: ${font.color.primary};
    text-decoration: none;
  }

  .site-title-desktop {
    white-space: nowrap;

    @media (max-width: calc(${screen.desktop} - 1px)) {
      display: none;
    }

    a {
      color: ${font.color.primary};
    }
  }

  .site-title-mobile {
    color: ${font.color.primary};
    text-align: center;
    width: 100%;

    @media (min-width: ${screen.desktop}) {
      display: none;
    }

    a {
      color: ${font.color.primary};
    }
  }
`;

const StyledNavbar = styled.nav`
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  max-width: 80vw;
  overflow-y: auto;
  padding: 0;
  position: fixed;
  text-align: left;
  top: 0;
  transform: ${({ open }) =>
    open ? 'translateX(0)' : 'translateX(calc(-100% - 7px))'};
  transition: transform 0.3s ease-in-out;
  width: 333px;

  @media (max-width: calc(${screen.desktop} - 1px)) {
    background-color: ${colors.senary};
  }

  @media (min-width: ${screen.desktop}) {
    align-items: center;
    box-shadow: none;
    flex-direction: row;
    height: 64px;
    justify-content: flex-end;
    margin: 0 auto;
    max-width: 100%;
    overflow-y: hidden;
    position: static;
    text-align: right;
    transform: translateX(0);
    width: 100%;
  }

  a {
    color: ${font.color.primary};
    padding: 7px 12px;
    text-decoration: none;
    transition: ${transition.normal};

    @media (min-width: calc(${screen.desktop} - 1px)) {
      &:hover {
        color: ${colors.secondary};
        opacity: 0.8;
      }
    }

    @media (max-width: calc(${screen.desktop} - 1px)) {
      font-size: 16px;

      &:first-child {
        margin-top: 60px;
      }
    }

    &.disabled {
      color: ${font.color.quaternary};
      pointer-events: none;
    }

    &.active {
      color: ${font.color.secondary};

      &:hover {
        color: ${font.color.secondary};
        opacity: 1;
      }
    }
  }
`;

const StyledToggleButton = styled.button`
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 27px;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  position: ${({ open }) => (open ? 'fixed' : 'static')};
  width: 27px;
  z-index: 2;

  &:focus {
    outline: none;
  }

  div {
    background-color: ${font.color.primary};
    border-radius: 10px;
    height: 3px;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 27px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: ${screen.desktop}) {
    display: none;
  }
`;
