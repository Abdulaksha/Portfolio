import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {


    MovieDesc:
      "This web app  is for helping you find your desired movie.The project helped me with understanding the working of API.I also learned new CSS properties and tricks.",
    MovieGithub: "https://github.com/Abdulaksha/Moviesapp",
    MovieWebsite: "https://film-mania.vercel.app/",

    weatherappDesc:
      "This  web application that allows users to effortlessly check current weather conditions and forecasts for any location.Users can search for specific cities, view real-time weather updates, and explore detailed forecasts, all while enjoying a seamless and intuitive interface.",
      weatherappGithub: "https://github.com/Abdulaksha/Weather-app",
      weatherappWebsite: "https://weather-app-abdulakshas-projects.vercel.app/",

    ToDoListDesc:
      "web application where users can manage their grocery shopping lists as a to-do list. This project demonstrates the use of advanced web development techniques for managing dynamic data and user interaction.",
      ToDoListGithub: "https://github.com/Abdulaksha/To-Do-list",
      ToDoListWebsite: "https://akshatodolist.vercel.app/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
