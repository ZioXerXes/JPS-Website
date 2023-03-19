import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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
            <a class="nav-link" href="#projects">ProjectsXXX</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row main">
        <div class="col-7">
          <div class="nameplate">
            <h1>John Paul Schmidt</h1>
            <h2>Writer and Coder for hire.</h2>
            <div class="button-box" id="social-media">
              <button class="social-button button-left">
                <a href="https://www.linkedin.com/in/john-paul-schmidt-b1306941" target="#">
                  <div class="button-contents">
                    <i class="fab fa-linkedin" id="icon"></i>
                    <p class="button-label">LinkedIn</p>
                  </div>
                </a>
              </button>
              <button class="social-button button-right">
                <a href="https://www.github.com/ZioXerXes" target="#">
                  <div class="button-contents">
                    <i class="fab fa-github" id="icon"></i>
                    <p class="button-label">GitHub</p>
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="col-5">
          <img class="picture" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png" />
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-12">
          <h2 class="portfolio-head" id="projects">Portfolio</h2>
        </div>
        <div class="col-6 project-1">
          <div class="project-box">
            <img src="https://picsum.photos/300/200" />
            <p class="project-title">Future Project</p>
          </div>
        </div>
        <div class="col-6 project-2">
          <div class="project-box">
            <img src="https://picsum.photos/300/200" />
            <p class="project-title">Future Project</p>
          </div>
        </div>
        <div class="col-6 project-3">
          <div class="project-box">
            <img src="https://picsum.photos/300/200" />
            <p class="project-title">Future Project</p>
          </div>
        </div>
        <div class="col-6 project-4">
          <div class="project-box">
            <img src="https://picsum.photos/300/200" />
            <p class="project-title">Future Project</p>
          </div>
        </div>
      </div>
      <hr/>
      <div class="row about-me-section" id="about-me">
        <div class="col-12 about-me">
          <img src="images/typewriter.jpg" class="typewriter" />
        </div>
        <div class="col-12 about-me">
          <h2>About Me</h2>
        </div>
        <div class="col-12 about-me">
          <p class="bio">I am a former journalist and a current freelance copywriter. During my search for the next big step in my life, I discovered a passion for web development. I am in the middle of Altcademy's bootcamp. We'll see where I end up afterward.</p>
        </div>
      </div>
    </div>
    <div class="footer container">
      <div class="row">
        <div class="col-12">
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;