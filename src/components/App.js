import React, { useState } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Concerts from './Concerts';
import Discography from './Discography';
import Media from './Media';
import Press from './Press';
import Gallery from './Gallery';
import Foundation from './Foundation';
import Commemorating from './Commemorating';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [activePath, setActivePath] = useState(null);

  return (
    <Router>
      <Navigation active={activePath} setActive={setActivePath} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/concerts" component={Concerts} />
        <Route exact path="/discography" component={Discography} />
        <Route exact path="/media" component={Media} />
        <Route exact path="/press" component={Press} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/foundation" component={Foundation} />
        <Route exact path="/commemorating" component={Commemorating} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/legal" component={Home} />
        <Route exact path="/privacy" component={Home} />
        <Route component={() => '404'} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
