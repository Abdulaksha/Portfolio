import React, { useState, useEffect } from "react";
// ADDED MISSING ICONS HERE
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser, AiFillStar } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const Nav = () => {
  const [navbarblur, setnavbarblur] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setnavbarblur(true);
    } else {
      setnavbarblur(false);
    }
  }

  var showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    ham[0].classList.toggle("showNavbar");
  };

  var hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
      <h1
        title="Reload"
        onClick={() => window.location.reload(true)}
        className="Logo"
      >
        AR
      </h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li>
          {/* CHANGED: updateExpanded is not defined, so we use hideMenu */}
          <a href="#home" onClick={hideMenu}>
            <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
          </a>
        </li>
        
        <li>
          <a href="#about" onClick={hideMenu}>
            <AiOutlineUser style={{ marginBottom: "2px" }} /> About
          </a>
        </li>

        <li>
          <a href="#projects" onClick={hideMenu}>
            <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={hideMenu}>
            <AiFillStar style={{ marginBottom: "2px" }} /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;