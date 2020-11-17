import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { GlobalStyles } from './GlobalStyles';
import AppRoutes from './Routes';
import CookieConsent from './CookieConsent';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    setShowNavbar(currPos.y > prevPos.y);
  });

  return (
    <Router>
      <CookieConsent />
      <GlobalStyles />
      <Navigation show={showNavbar} />
      <AppRoutes showNavbar={showNavbar} />
      <Footer />
    </Router>
  );
}

export default App;
