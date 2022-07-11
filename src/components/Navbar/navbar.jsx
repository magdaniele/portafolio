import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/navbar.scss";

const Navbar = (props) => {
  const {section1, section2, section3, section4 } = props;
  const [backgroundColorChange/* , setBackgroundColorchange */] = useState("#FFFFFF");
  const [colorChange/* , setColorchange */] = useState("black");
/*   const [section2Ref, section2InView] = useInView({ threshold: 0.5 });
  const [section3Ref, section3InView] = useInView({ threshold: 0.5 });
  const [section4Ref, section4InView] = useInView({ threshold: 0.5 }); */
  const changeNavbarColor = () => {
    /*if(section1){
       document.getElementById('Home').style.color('#3399ff'); 
      console.log('no pasa nada');
    }else{
       document.getElementById('Home').style.color('black') 
      console.log('aqui toy');
    }*/
    /* console.log(window.scrollY);
    if(window.outerWidth>700){
        if (window.scrollY >= 8000) {
          setBackgroundColorchange("#FFFFFF");
          setColorchange("#0E005F")
        } else {
            setBackgroundColorchange("transparent");
            setColorchange("#FFFFFF")
        }
    }else{
        if (window.scrollY >= 1000) {
            setBackgroundColorchange("#FFFFFF");
            setColorchange("#0E005F")
        } else {
            setBackgroundColorchange("transparent");
            setColorchange("#FFFFFF")
        }
    } */
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
    <nav className="navbar" style={{ backgroundColor: `${backgroundColorChange}`}}>
      <div className="logo">
        <a href="/" style={{color:  `${colorChange}`}}>@magdaniele</a>
      </div>
      <div id="contentNav">
        <ul className="navbar_item_list" id="myNavList" >
          <li className="navbar_item">
            <a href="#mainDiv" style={section1?{color:  `#3399ff`}:{color:  `black`}} id='HomeNav'>Home</a>
          </li>
          <li className="navbar_item">
            <a href="#about" style={section2?{color:  `#3399ff`}:{color:  `black`}}  id='AboutNav'>About Me</a>
          </li>
          <li className="navbar_item">
            <a href="#tecnologies" style={section3?{color:  `#3399ff`}:{color:  `black`}} id='TecnologiesNav'>Tecnologies</a>
          </li>
          <li className="navbar_item">
            <a href="#experience" style={section4?{color:  `#3399ff`}:{color:  `black`}} id='ExperienceNav'>Experience</a>
          </li>
        </ul>
        <button className="icon" onClick={responsiveNavbar}>
          <FontAwesomeIcon icon={faBars} style={{color:  `${colorChange}`}}/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
