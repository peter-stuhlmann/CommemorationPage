import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { GlobalStyles } from './GlobalStyles';
import AppRoutes from './Routes';
import CookieConsent from './CookieConsent';

function App() {
  return (
    <Router>
      <CookieConsent />
      <GlobalStyles />
      <Navigation />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
