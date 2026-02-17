import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    
    EmployeeERPDesc: "A comprehensive Full-Stack HR Management application designed to handle the complete lifecycle of employee data, from onboarding to payroll configuration. Built with Type-Safety and Relational Database Integrity in mind.",
    EmployeeERPGithub: "https://github.com/Abdulaksha/employee-erp-system",
    EmployeeERPWebsite: "https://employee-erp-system.vercel.app",

    weatherappDesc: "This web application allows users to effortlessly check current weather conditions and forecasts. Features real-time updates and an intuitive interface.",
    weatherappGithub: "https://github.com/Abdulaksha/Weather-app",
    weatherappWebsite: "https://weather-app-abdulakshas-projects.vercel.app/",

    ToDoListDesc: "Web application where users can manage their grocery shopping lists. Demonstrates dynamic data handling and user interaction.",
    ToDoListGithub: "https://github.com/Abdulaksha/To-Do-list",
    ToDoListWebsite: "https://akshatodolist.vercel.app/",
  };

  return (
    <div
  className="projectBox"
  style={{
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    minHeight: "400px", 
  }}
>
  <img
    className="projectPhoto"
    src={projectPhoto}
    alt={`${projectName} display`}
    style={{ width: "100%", height: "auto", borderRadius: "10px" }}
  />

  <div style={{ flex: "1 1 auto", marginTop: "10px" }}>
    <h3>{projectName}</h3>
    <p>{desc[projectName + "Desc"] || "Description not available."}</p>
  </div>

  <div style={{ display: "flex", justifyContent: "space-around", marginTop: "auto" }}>
    <a href={desc[projectName + "Github"]} target="_blank" rel="noreferrer">
      <button className="submit-btn">
        <FaGithub style={{ marginRight: "5px" }} /> Github
      </button>
    </a>

    <a href={desc[projectName + "Website"]} target="_blank" rel="noreferrer">
      <button className="submit-btn">
        <CgFileDocument style={{ marginRight: "5px" }} /> Demo
      </button>
    </a>
  </div>
</div>

  );
};

export default ProjectBox;