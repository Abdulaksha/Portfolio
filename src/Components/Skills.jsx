import React from "react";

import {
  FaReact,
  FaGitAlt,
  FaGithub,
  
  FaFigma,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  
} from "react-icons/fa";
import { DiJavascript1,DiDotnet } from "react-icons/di";
import { TbSql } from "react-icons/tb"; 
import { SiDotnet } from "react-icons/si";


const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
  
    ".Net":<SiDotnet />    ,
    
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    "Asp.Net":<DiDotnet />,

    SQL: <TbSql /> ,
    Figma: <FaFigma />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
