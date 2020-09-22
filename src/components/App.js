import React, { lazy, Suspense } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
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
  return (
    <Router>
      <GlobalStyles />
      <Navigation />
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
          <Route exact path="/commemorating" component={Commemorating} />
          <Route exact path="/legal-notice" component={Legal} />
          <Route exact path="/privacy-policy" component={Legal} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
