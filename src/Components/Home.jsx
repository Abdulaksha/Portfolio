import React from "react";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/1727341140501.png"; 
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello there!</h1>
          <h1>
            I'M <b>Abdul Rahman</b>
          </h1>
          <Type />
          
       
          <a href="#about" style={{ textDecoration: "none" }}>
            <button>
              About Me
              <BsPerson />
            </button>
          </a>

          <a href="#contact" style={{ textDecoration: "none" }}>
            <button>
              Contact <CgPhone />
            </button>
          </a>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Tilt>
            <img 
              src={Avatar} 
              alt="Abdul Rahman" 
              style={{
                maxWidth: "450px",   
                width: "100%",       
                height: "auto",      
                filter: "drop-shadow(0px 0px 30px rgba(0, 210, 255, 0.4))", 
                borderRadius: "20px"
              }}
            />
          </Tilt>
        </div>

      </div>
    </div>
  );
};

export default Home;