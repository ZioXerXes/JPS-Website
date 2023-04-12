import profilePic2 from "./profilepic2.jpg";

const About = () => {
  return (
    <div className="about-page container">
      <div className="row main">
        <div className="vertical-align col-6">
          <div>
            <h1 className="text-center">John Paul Schmidt</h1>
            <h2 className="text-center">Writer / Coder</h2>
            <div className="about-me-text">
              <p className="raleway">I am a journalist and programming student. Tools and languages I have studied so far include:</p>
              <ul className="raleway">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>ReactJS</li>
                <li>DOM</li>
                <li>APIs</li>
                <li>CSS</li>
              </ul>
            </div>
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
        <div className="col-6">
          <img className="picture" src={profilePic2} alt="profilePic" />
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default About;