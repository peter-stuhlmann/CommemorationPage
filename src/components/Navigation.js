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
  const [hidden, setHidden] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    let hide = prevPos.y !== 0 && currPos.y < prevPos.y;
    setHidden(hide);
  });

  return (
    <Navbar
      className={hidden ? 'navbar-hidden-md' : ''}
      collapseOnSelect
      expanded={expanded}
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
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
          <LinkContainer exact to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="concerts">
            <Nav.Link>Concerts</Nav.Link>
          </LinkContainer>
          <LinkContainer to="discography">
            <Nav.Link>Discography</Nav.Link>
          </LinkContainer>
          <LinkContainer to="media">
            <Nav.Link>Media</Nav.Link>
          </LinkContainer>
          <LinkContainer to="press">
            <Nav.Link>Press</Nav.Link>
          </LinkContainer>
          <LinkContainer to="gallery">
            <Nav.Link>Gallery</Nav.Link>
          </LinkContainer>
          <LinkContainer to="foundation">
            <Nav.Link>Foundation</Nav.Link>
          </LinkContainer>
          <LinkContainer to="commemorating">
            <Nav.Link>Commemorating</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
