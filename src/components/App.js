import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { GlobalStyles } from './GlobalStyles';
import AppRoutes from './Routes';

function App() {
  const [activePath, setActivePath] = useState(null);

  return (
    <Router>
      <GlobalStyles />
      <Navigation active={activePath} setActive={setActivePath} />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
