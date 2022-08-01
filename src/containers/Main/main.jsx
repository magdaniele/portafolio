import "./styles/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import picture from "../../assets/images/homePic.svg";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Main = ({ innerRef }) => {
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "<strong>Ingeniero de Sistemas</strong> ",
        "<strong>Desarrollador FullStack!</strong> ",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div id="mainDiv" ref={innerRef}>
      <div className="main-container">
        <div className="containerMain">
          <div className="content">
            <section id="main-contentText">
            <span>
                Eddy José Cardona Magdaniel
            </span>
            <div className="typeDiv">
              <span style={{ whiteSpace: "pre" }} ref={el} />
            </div>
            </section>
            <section id="main-contentPic">
              <img className="homePic" src={picture} alt="homePic"  id="iconLogo"/>
            </section>
          </div>
          {/* <a className="main-button" href="/">
            <span>Contact me!</span>
            <i></i>
          </a> */}
          <span> <FontAwesomeIcon icon={faArrowDown} id="iconArrow" /></span>
        </div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      </div>
      <div className="square" id="square_1"></div>
    </div>
  );
};

export default Main;
