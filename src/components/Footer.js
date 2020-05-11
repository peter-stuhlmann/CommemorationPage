import React from 'react';
import '../css/Footer.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
  return (
    <footer className="text-muted position-absolute">
      <div className="container">
        <Navbar expand="sm" expanded className="px-0">
          <Navbar.Text className="mr-auto">Made by me </Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/legal">Legal notice</Nav.Link>
              <Nav.Link href="/privacy">Privacy policy</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </footer>
  );
}
