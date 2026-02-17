import React from "react";
import { FaFileDownload, FaServer, FaCode, FaNetworkWired, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <div className="AboutPage">
      <div className="AboutText">
        <h1 className="AboutTextHeading">
          Get to <b>know</b> me!
        </h1>
        
        <p>
          Hi, I’m <b>Abdul Rahman</b>. Born and raised in <b>Tamil Nadu, India</b>, I am a professional <b>Full Stack Developer</b> and <b>IT Network Specialist</b> currently working in the <b>UAE</b>.
        </p>

        <p>
          I bridge the gap between <b>software creation</b> and <b>infrastructure management</b>. While I graduated with a B.Sc. in Computer Science, my professional experience has evolved to cover the entire tech ecosystem—from writing efficient code to ensuring the servers and networks running it are secure and stable.
        </p>

        {/* Core Competencies Box */}
        <div style={{ margin: "20px 0", padding: "20px", borderLeft: "4px solid var(--primary)", background: "rgba(255,255,255,0.05)", borderRadius: "0 10px 10px 0" }}>
          <h3 style={{fontSize: "18px", marginBottom: "15px", color: "white"}}>Core Competencies:</h3>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            <li style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "16px"}}>
               <FaCode color="var(--primary)"/> Full Stack Dev
            </li>
            <li style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "16px"}}>
               <FaNetworkWired color="var(--primary)"/> Network Config
            </li>
            <li style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "16px"}}>
               <FaServer color="var(--primary)"/> System Admin
            </li>
            <li style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "16px"}}>
               <FaTools color="var(--primary)"/> Troubleshooting
            </li>
          </ul>
        </div>

        <p>
          I am always looking for challenging roles where I can utilize my <b>hybrid skillset</b> to build robust web solutions and maintain critical IT infrastructure.
        </p>

        <a href="Abdul.pdf" download className="resume-btn">
          <button>
            Download Resume <FaFileDownload />
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;