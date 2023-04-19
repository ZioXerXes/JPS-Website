const Contact = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-6 text-center">
          <button className="social-button">
            <a href="https://www.linkedin.com/in/john-paul-schmidt-b1306941" target="#">
              <div className="button-contents mx-3">
                <h2><i className="bi bi-linkedin"></i></h2>
                <p className="button-label ps-1">LinkedIn</p>
              </div>
            </a>
          </button>
        </div>
        <div className="col-6  text-center">
          <button className="social-button">
            <a href="https://www.github.com/ZioXerXes" target="#">
              <div className="button-contents">
                <h2><i className="bi bi-github"></i></h2>
                <p className="button-label ps-1">GitHub</p>
              </div>
            </a>
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <p className="raleway">Email: <a href="mailto:theJohnPaulSchmidt@gmail.com">theJohnPaulSchmidt@gmail.com</a></p>
          <p className="raleway mt-2">Phone: <a href="7042328633">(704) 232-8633</a></p>
        </div>        
        <div className="col-3"></div>
      </div>
    </div>
  )
}

export default Contact;