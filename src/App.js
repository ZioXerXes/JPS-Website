import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';
import './App.css';
//import Template from './Template.js';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-left navbar-expand-md navbar-light">
        <a className="navbar-brand raleway title-card" href="#">J.P.S. Portfolio</a> 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse form-inline" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto form-inline">
            <li className="nav-item active raleway">
              <Link className="nav-link" to="/">About Me</Link>
            </li>
            <li className="nav-item active raleway">
              <Link className="nav-link" to="/projects/">Projects</Link>
            </li>
            <li className="nav-item active raleway">
              <Link className="nav-link" to="/contact/">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/" exact component={About} />
      <Route path="/projects/" component={Projects} />
      <Route path="/contact/" component={Contact} />
    </div>
  );
}

/*const Sidebar = () => {
  return (
    <div className="d-none d-md-block col-md-3">
      <div className="border border-primary py-4 px-3">
        Sidebar
      </div>
    </div>
  )
}
*/

const Footer = () => {
  return (
    <div className="footer container">
      <div className="row">
        <div className="footer-content col-12">
          Website designed by John Paul Schmidt © 2023
        </div>
      </div>
    </div>
  )
}

const Template = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Footer />
    </React.Fragment>
  )
}

const App = () => {
  return (
    <Router>
    <Template>
    
    </Template>
    </Router>
  );
}

export default App;