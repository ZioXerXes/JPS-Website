const Navbar = () => {
  return (
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
  );
}

const Footer = () => {
  return (
    <div className="footer container">
      <div className="row">
        <div className="col-12">
          John Paul Schmidt © 2023
        </div>
      </div>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className="d-none d-md-block col-md-3">
      <div className="border border-primary py-4 px-3">
        Sidebar
      </div>
    </div>
  )
}

const Template = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-9">
            {props.children}
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Template;