import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
  Hi, my name is <b>Abdul Rahman</b>, and I’m from Trichy, Tamil Nadu. I’m a passionate <b>Full Stack Developer</b> and a proud graduate of Bharathidasan University, holding a <b>Bachelor’s in Computer Science</b>.
</p>

<p>
  I specialize in building robust, dynamic web applications, focusing on both back-end functionality and front-end design. I enjoy combining efficient development with creativity to deliver engaging and user-friendly experiences. Feel free to explore some of my work in the projects section.
</p>

<p>
  I am always <b>open</b> to exciting collaborations or roles where I can both contribute and grow. Don’t hesitate to connect with me—links are available in the footer.
</p>

<p>
  When I’m not coding, I spend my time  reading books, building Discord communities and travelling.
</p>



          <a href="AbdulRahman(bs.cs-2024).pdf" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill=".Net" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Asp.Net" />
        <Skills skill="Figma" />
        <Skills skill="SQL" />
      </div>
    </>
  );
};

export default About;
