import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/concerts">Concerts</Link>
        </li>
        <li>
          <Link to="/discography">Discography</Link>
        </li>
        <li>
          <Link to="/media">Media</Link>
        </li>
        <li>
          <Link to="/press">Press</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/foundation">Foundation</Link>
        </li>
        <li>
          <Link to="/commemorating">Commemorating</Link>
        </li>
      </ul>
    </nav>
  );
}
