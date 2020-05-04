import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import '../css/Navigation.css';

export default function Navigation() {
  const location = useLocation();
  const [expanded, toggleExpanded] = useState(false);
  const [active, setActive] = useState(location.pathname.slice(1));
  const [show, setShow] = useState(false);

  const routes = [
    { path: '/', exact: true, text: 'Home', disabled: false },
    { path: 'about', exact: false, text: 'About', disabled: false },
    { path: 'concerts', exact: false, text: 'Concerts', disabled: false },
    { path: 'discography', exact: false, text: 'Discography', disabled: true },
    { path: 'media', exact: false, text: 'Media', disabled: true },
    { path: 'press', exact: false, text: 'Press', disabled: true },
    { path: 'gallery', exact: false, text: 'Gallery', disabled: true },
    { path: 'foundation', exact: false, text: 'Foundation', disabled: true },
    {
      path: 'commemorating',
      exact: false,
      text: 'Commemorating',
      disabled: true,
    },
  ];

  useScrollPosition(({ prevPos, currPos }) => {
    setShow(currPos.y > prevPos.y);
  });

  return (
    <Navbar
      className={show ? 'navbar-show-md' : ''}
      collapseOnSelect
      expanded={expanded}
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      onToggle={() => {
        toggleExpanded(!expanded);
      }}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        onClick={() => {
          toggleExpanded(false);
          setActive('/');
        }}
      >
        David Shallon
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="mr-auto"
          activeKey={active}
          onSelect={(selected) => setActive(selected)}
        >
          {routes.map((route) => {
            const { path, exact, text, disabled } = route;
            return (
              <LinkContainer
                exact={exact}
                to={path}
                className={disabled ? 'disabled' : ''}
              >
                <Nav.Link>{text}</Nav.Link>
              </LinkContainer>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
