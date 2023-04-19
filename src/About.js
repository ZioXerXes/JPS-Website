import profilePic2 from "./profilepic2.jpg";

const About = () => {
  return (
    <div className="about-page container">
      <div className="row main">
        <div className="vertical-align col-6">
          <div className="text-center">
            <h1 className="text-center">John Paul Schmidt</h1>
            <h2 className="text-center">Writer / Coder</h2>
            <div className="about-me-text">
              <p className="raleway text-center">I am a journalist and programming student. Tools and languages I have studied so far include:</p>
              <ul className="raleway">
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>HTML</li>
                <li>ReactJS</li>
                <li>DOM</li>
                <li>APIs</li>
                <li>CSS</li>
              </ul>
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