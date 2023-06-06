import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';
import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

//import Template from './Template.js';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">John Paul Schmidt</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active nav-page" aria-current="page" to="/">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-page" to="/projects/">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-page" to="/contact/">Contact</Link>
              </li>
            </ul>
          </div>
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