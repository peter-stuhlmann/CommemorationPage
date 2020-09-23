import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { GlobalStyles } from './GlobalStyles';
import { Container } from './Container';
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Concerts = lazy(() => import('./Concerts'));
const Discography = lazy(() => import('./Discography'));
const Media = lazy(() => import('./Media'));
const Press = lazy(() => import('./Press'));
const Gallery = lazy(() => import('./Gallery'));
const Foundation = lazy(() => import('./Foundation'));
const Commemorating = lazy(() => import('./Commemorating'));
const Legal = lazy(() => import('./Legal'));
const Orchestras = lazy(() => import('./Orchestras'));
const Choirs = lazy(() => import('./Choirs'));
const NotFound = lazy(() => import('./NotFound'));

function App() {
  const [activePath, setActivePath] = useState(null);

  return (
    <Router>
      <GlobalStyles />
      <Navigation active={activePath} setActive={setActivePath} />
      <Suspense fallback={<Container>Loading...</Container>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/concerts" component={Concerts} />
          <Route exact path="/choirs" component={Choirs} />
          <Route exact path="/orchestras" component={Orchestras} />
          <Route exact path="/discography" component={Discography} />
          <Route exact path="/media" component={Media} />
          <Route exact path="/press" component={Press} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/foundation" component={Foundation} />
          <Route exact path="/memories" component={Commemorating} />
          <Route exact path="/legal-notice" component={Legal} />
          <Route exact path="/privacy-policy" component={Legal} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
