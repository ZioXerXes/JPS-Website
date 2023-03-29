import profilePic from "./profilepic.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="row main">
        <div className="col-7">
          <div>
            <h1 className="text-center">John Paul Schmidt</h1>
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
  )
}

export default About;