import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home';

import './App.css';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <Router>
      <nav class="navbar fixed-left navbar-expand-md navbar-light">
      <a class="navbar-brand raleway" href="#">J.P.S. Portfolio</a> 
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse form-inline" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto form-inline">
          <li class="nav-item active raleway">
            <a class="nav-link" href="#about-me">About Me</a>
          </li>
          <li class="nav-item active raleway">
            <a class="nav-link" href="#social-media">Social Media</a>
          </li>
          <li class="nav-item active raleway">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;