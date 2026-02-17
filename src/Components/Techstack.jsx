import React from "react";
import Skills from "./Skills";

const TechStack = () => {
  return (
    <div className="container">
      <h1 className="SkillsHeading">Professional Skillset</h1>
      
      {/* 1. SOFTWARE DEVELOPMENT SKILLS */}
      <div style={{textAlign: "center", color: "#a0aec0", marginBottom: "20px", fontSize: "18px"}}>Software & Development</div>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill=".Net" />
        <Skills skill="Asp.Net" />
        <Skills skill="Javascript" />
        <Skills skill="Typescript" />
        <Skills skill="SQL" />
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Figma" />
      </div>

      {/* 2. IT & NETWORKING SKILLS */}
      <div style={{textAlign: "center", color: "#a0aec0", margin: "50px 0 20px", fontSize: "18px"}}>IT Infrastructure & Networking</div>
      <div className="skills">
        <Skills skill="Networking" />
        <Skills skill="Windows Server" />
        <Skills skill="Troubleshooting" />
        <Skills skill="Hardware Maintenance" />
        <Skills skill="Cybersecurity" />
      </div>
    </div>
  );
};

export default TechStack;