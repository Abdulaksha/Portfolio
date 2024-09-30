import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../images/Film.png";
import ColourImage from "../images/Untitled design (2).png";
import BackpackImage from "../images/Untitled design.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
      
        <ProjectBox projectPhoto={FilmImage} projectName="Movie" />
        <ProjectBox projectPhoto={ColourImage} projectName="weatherapp" />
        <ProjectBox projectPhoto={BackpackImage} projectName="ToDoList" />
      </div>
    </div>
  );
};

export default Projects;
