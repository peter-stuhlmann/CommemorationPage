import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function GermanRouter() {
  return (
    <Fragment>
      <Route exact path="/ueber" render={() => <Redirect to="/about" />} />
      <Route
        exact
        path="/konzerte"
        render={() => <Redirect to="/concerts" />}
      />
      <Route exact path="/chöre" render={() => <Redirect to="/choirs" />} />
      <Route
        exact
        path="/orchester"
        render={() => <Redirect to="/orchestras" />}
      />
      <Route exact path="/medien" render={() => <Redirect to="/media" />} />
      <Route exact path="/presse" render={() => <Redirect to="/press" />} />
      <Route exact path="/galerie" render={() => <Redirect to="/gallery" />} />
      <Route
        exact
        path="/stiftung"
        render={() => <Redirect to="/foundation" />}
      />
      <Route
        exact
        path="/erinnerungen"
        render={() => <Redirect to="/memories" />}
      />
      <Route
        exact
        path="/impressum"
        render={() => <Redirect to="/legal-notice" />}
      />
      <Route
        exact
        path="/datenschutzerklaerung"
        render={() => <Redirect to="/privacy-policy" />}
      />
    </Fragment>
  );
}
