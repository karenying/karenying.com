import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Footer from './Components/Footer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route path='*' component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}
