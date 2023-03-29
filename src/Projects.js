import mathGame from "./mathgamethumb.jpg";
import toDoList from "./todothumb.jpg";

const Projects = () => {
  return (
    <div className="row">
    <div className="col-12">
      <h2 className="portfolio-head" id="projects">Portfolio</h2>
    </div>
    <div className="col-6 project-1">
      <div className="project-box">
        <a href="https://magnificent-douhua-78ac8a.netlify.app/">
          <img src={mathGame} />
        </a>
        <p className="project-title">Math Arcade Game</p>
      </div>
    </div>
    <div className="col-6 project-2">
      <div className="project-box">
        <a href="https://subtle-otter-532d8a.netlify.app/">  
          <img src={toDoList} />
        </a>
        <p className="project-title">To Do List</p>
      </div>
    </div>
    <div className="col-6 project-3">
      <div className="project-box">
        <img src="https://picsum.photos/300/200" />
        <p className="project-title">Future Project</p>
      </div>
    </div>
    <div className="col-6 project-4">
      <div className="project-box">
        <img src="https://picsum.photos/300/200" />
        <p className="project-title">Future Project</p>
      </div>
    </div>
  </div>
  )
}

export default Projects;