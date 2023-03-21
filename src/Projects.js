const portfolio = 
      <div className="row">
        <div className="col-12">
          <h2 className="portfolio-head" id="projects">Portfolio</p>
        </div>
        <div className="col-6 project-1">
          <div className="project-box">
            <img src="https://picsum.photos/300/200">
            <p className="project-title">Future Project</p>
          </div>
        </div>
        <div className="col-6 project-2">
          <div className="project-box">
            <img src="https://picsum.photos/300/200">
            <p className="project-title">Future Project</p>
          </div>
        </div>
        <div className="col-6 project-3">
          <div className="project-box">
            <img src="https://picsum.photos/300/200">
            <p className="project-title">Future Project</p>
          </div>
        </div>
        <div className="col-6 project-4">
          <div className="project-box">
            <img src="https://picsum.photos/300/200">
            <p className="project-title">Future Project</p>
          </div>
        </div>
      </div>;

ReactDOM.render(
  portfolio,
  document.getElementById('root')
);



export default Projects;