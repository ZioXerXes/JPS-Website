import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import profilePic from "./profilepic.jpg";
import './App.css';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <Router>
    <nav className="navbar fixed-left navbar-expand-md navbar-light">
      <a className="navbar-brand raleway" href="#">J.P.S. Portfolio</a> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse form-inline" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto form-inline">
          <li className="nav-item active raleway">
            <a className="nav-link" href="#about-me">About Me</a>
          </li>
          <li className="nav-item active raleway">
            <a className="nav-link" href="#social-media">Social Media</a>
          </li>
          <li className="nav-item active raleway">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container">
      <div className="row main">
        <div className="col-7">
          <div>
            <h1>John Paul Schmidt</h1>
            <h2 className="text-center">Writer / Coder</h2>
            <div className="button-box text-center" id="social-media">
              <button className="social-button button-left">
                <a href="https://www.linkedin.com/in/john-paul-schmidt-b1306941" target="#">
                  <div className="button-contents">
                    <i className="fab fa-linkedin" id="icon"></i>
                    <p className="button-label">LinkedIn</p>
                  </div>
                </a>
              </button>
              <button className="social-button button-right">
                <a href="https://www.github.com/ZioXerXes" target="#">
                  <div className="button-contents">
                    <i className="fab fa-github" id="icon"></i>
                    <p className="button-label">GitHub</p>
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col-5">
          <img className="picture" src={profilePic} alt="profilePic" />
        </div>
      </div>
      <hr/>
    </div>
    <div className="footer container">
      <div className="row">
        <div className="col-12">
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;