const Contact = () => {
  return (
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
      <p>Email: theJohnPaulSchmidt@gmail.com</p>
    </div>
  )
}

export default Contact;