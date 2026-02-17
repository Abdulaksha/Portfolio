import React, { useState, useEffect } from "react";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Projects"; 
import TechStack from "./Components/Techstack"; 
import Contact from "./Components/Contact";
import MoveToTop from "./Components/MoveToTop";
import CircleLoader from "react-spinners/CircleLoader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <div>


      
      {loading ? (
        <div className="loader">
          <CircleLoader
            color={"#00d2ff"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
<div className="scrolling-text">
   Abdul's World &nbsp; • &nbsp; Abdul's World &nbsp; • &nbsp; Abdul's World &nbsp; • &nbsp;
</div>
<Nav />
          
          <MoveToTop />
          
          <div id="home">
            <Home />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="projects">
            <Project />
          </div>

          {/* Moved Skills (TechStack) here, AFTER Projects */}
          <div id="skills">
            <TechStack />
          </div>

          <div id="contact">
            <Contact />
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;