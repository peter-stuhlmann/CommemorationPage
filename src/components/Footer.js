import React from 'react';
import '../css/Footer.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export default function Footer() {
  return (
    <footer className="text-muted position-absolute">
      <div className="container">
        <Navbar expand="sm" expanded className="px-0">
          <Navbar.Text className="mr-auto">
            Copyright 2020 David Shallon Foundation Berlin
          </Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
            <Nav activeKey={null}>
              <LinkContainer to="/legal-notice">
                <Nav.Link>Legal notice</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/privacy-policy">
                <Nav.Link>Privacy policy</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </footer>
  );
}
