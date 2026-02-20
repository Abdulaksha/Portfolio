import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../Images/employee.webp";
import ColourImage from "../Images/Untitled design (2).webp";
import BackpackImage from "../Images/Untitled design.webp";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        
        <ProjectBox projectPhoto={FilmImage} projectName="Employee ERP" />
        <ProjectBox projectPhoto={ColourImage} projectName="weather app" />
        <ProjectBox projectPhoto={BackpackImage} projectName="ToDo List" />
      </div>
    </div>
  );
};

export default Projects;