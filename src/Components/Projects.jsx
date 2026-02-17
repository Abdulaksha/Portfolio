import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../Images/Film.png";
import ColourImage from "../Images/Untitled design (2).png";
import BackpackImage from "../Images/Untitled design.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        
        <ProjectBox projectPhoto={FilmImage} projectName="EmployeeERP" />
        <ProjectBox projectPhoto={ColourImage} projectName="weatherapp" />
        <ProjectBox projectPhoto={BackpackImage} projectName="ToDoList" />
      </div>
    </div>
  );
};

export default Projects;