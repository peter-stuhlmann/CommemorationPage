import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import '../css/Navigation.css';

export default function Navigation(props) {
  const location = useLocation();
  const [expanded, toggleExpanded] = useState(false);
  const { active, setActive } = props;
  const [show, setShow] = useState(false);

  const routes = [
    { path: '/', exact: true, text: 'Home', disabled: false },
    // { path: 'about', exact: false, text: 'About', disabled: false },
    { path: 'concerts', exact: false, text: 'Concerts', disabled: false },
    // { path: 'discography', exact: false, text: 'Discography', disabled: true },
    // { path: 'media', exact: false, text: 'Media', disabled: true },
    // { path: 'press', exact: false, text: 'Press', disabled: true },
    { path: 'gallery', exact: false, text: 'Gallery', disabled: false },
    // { path: 'foundation', exact: false, text: 'Foundation', disabled: true },
    // {
    //   path: 'memories',
    //   exact: false,
    //   text: 'Memories',
    //   disabled: false,
    // },
  ];

  useEffect(() => {
    setActive(location.pathname.slice(1));
  }, [location.pathname, setActive]);

  useScrollPosition(({ prevPos, currPos }) => {
    setShow(currPos.y > prevPos.y);
  });

  return (
    <Navbar
      className={show || expanded ? 'navbar-show-md' : ''}
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
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav
          // className="mr-auto"
          activeKey={active}
        >
          {routes.map((route) => {
            const { path, exact, text, disabled } = route;
            return (
              <LinkContainer
                exact={exact}
                to={path}
                className={disabled ? 'disabled' : ''}
                key={path}
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
