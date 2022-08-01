import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/navbar.scss";

const Navbar = (props) => {
  const { section1, section2, section3, section4 } = props;
  const [styleChange, setStyleChange] = useState();
  const [colorChange, setColorchange] = useState("#37373");
  const changeNavbarColor = () => {
    if (!section1) {
      setStyleChange({
        backgroundColor: "white",
        boxShadow: "rgb(0 0 0 / 19%) 1px 1px 10px 0px",
      });
      setColorchange("#373737");
    } else {
      setStyleChange({
        backgroundColor: "transparent",
        boxShadow: "none",
      });
      setColorchange("white");
    }
  };

  const responsiveNavbar = () => {
    var x = document.getElementById("myNavList");
    if (x.className === "navbar_item_list") {
      x.className += " responsive";
    } else {
      x.className = "navbar_item_list";
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className="navbar" style={styleChange}>
      <div className="logo">
        <a href="/" style={{ color: `${colorChange}` }}>
          @magdaniele
        </a>
      </div>
      <div id="contentNav">
        <ul className="navbar_item_list" id="myNavList">
          <li className={section1 ? "navbar_item active" : "navbar_item"}>
            <a href="#mainDiv" style={{ color: `${colorChange}` }} id="HomeNav">
              Home
            </a>
          </li>
          <li className={section2 ? "navbar_item active" : "navbar_item"}>
            <a href="#about" style={{ color: `${colorChange}` }} id="AboutNav">
              About Me
            </a>
          </li>
          <li className={section3 ? "navbar_item active" : "navbar_item"}>
            <a
              href="#tecnologies"
              style={{ color: `${colorChange}` }}
              id="TecnologiesNav"
            >
              Tecnologies
            </a>
          </li>
          <li className={section4 ? "navbar_item active" : "navbar_item"}>
            <a
              href="#experience"
              style={{ color: `${colorChange}` }}
              id="ExperienceNav"
            >
              Experience
            </a>
          </li>
        </ul>
        <button className="icon" onClick={responsiveNavbar}>
          <FontAwesomeIcon icon={faBars} style={{ color: `${colorChange}` }} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
