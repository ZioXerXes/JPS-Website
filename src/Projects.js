import mathGame from "./mathgamethumb.jpg";
import toDoList from "./todothumb.jpg";
import shoppingList from "./shoppinglistthumb.jpg";
import blackJack from "./blackjackthumb.jpg";

const Projects = () => {
  return (
    <div className="row no-scroll">
    <div className="col-12">
      <h2 className="portfolio-head" id="projects">Portfolio</h2>
    </div>
    <div className="col-6 project-box">
      <a href="https://magnificent-douhua-78ac8a.netlify.app/">
        <img className="project-thumb" src={mathGame} />
      </a>
      <h4 className="project-title">Math Arcade Game</h4>
    </div>
    <div className="col-6 project-box">
      <a href="https://subtle-otter-532d8a.netlify.app/">  
        <img className="project-thumb" src={toDoList} />
      </a>
      <h4 className="project-title">To Do List</h4>
    </div>
    <div className="col-6 project-box-2">
      <a href="https://relaxed-cascaron-9042da.netlify.app/">
        <img className="project-thumb" src={shoppingList} />
      </a>
      <h4 className="project-title">Shopping List</h4>
    </div>
    <div className="col-6 project-box-2">
      <a href="https://blackjack.johnschmidt1.repl.co//">
        <img className="project-thumb" src={blackJack} />
      </a>
      <h4 className="project-title">Blackjack</h4>
    </div>
  </div>
  )
}

export default Projects;