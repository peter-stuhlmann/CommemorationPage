import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Container } from './Container';
import ScrollToTop from './ScrollToTop';

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
const Repertoire = lazy(() => import('./Repertoire'));
const Choirs = lazy(() => import('./Choirs'));
const NotFound = lazy(() => import('./NotFound'));

function DefaultRoutes() {
  return (
    <Suspense fallback={<Container>Loading...</Container>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/concerts" component={Concerts} />
        <Route exact path="/choirs" component={Choirs} />
        <Route exact path="/orchestras" component={Orchestras} />
        <Route exact path="/concerts/repertoire" component={Repertoire} />
        <Route exact path="/discography" component={Discography} />
        <Route exact path="/media" component={Media} />
        <Route exact path="/press" component={Press} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/foundation" component={Foundation} />
        <Route exact path="/memories" component={Commemorating} />
        <Route exact path="/legal-notice" component={Legal} />
        <Route exact path="/privacy-policy" component={Legal} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function Redirects() {
  return (
    <Fragment>
      <Route exact path="/ueber">
        <Redirect to="/about" />
      </Route>
      <Route exact path="/konzerte">
        <Redirect to="/concerts" />
      </Route>
      <Route exact path="/chöre">
        <Redirect to="/choirs" />
      </Route>
      <Route exact path="/orchester">
        <Redirect to="/orchestras" />
      </Route>
      <Route exact path="/medien">
        <Redirect to="/media" />
      </Route>
      <Route exact path="/presse">
        <Redirect to="/press" />
      </Route>
      <Route exact path="/galerie">
        <Redirect to="/gallery" />
      </Route>
      <Route exact path="/stiftung">
        <Redirect to="/foundation" />
      </Route>
      <Route exact path="/erinnerungen">
        <Redirect to="/memories" />
      </Route>
      <Route exact path="/impressum">
        <Redirect to="/legal-notice" />
      </Route>
      <Route exact path="/datenschutzerklaerung">
        <Redirect to="/privacy-policy" />
      </Route>
    </Fragment>
  );
}

export default function Routes() {
  return (
    <Fragment>
      <Redirects />
      <DefaultRoutes />
      <ScrollToTop />
    </Fragment>
  );
}
