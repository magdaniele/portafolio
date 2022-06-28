import { useState } from 'react';
import "./styles/navbar.scss";

const Navbar = () => {
    const [colorChange, setColorchange] = useState('transparent');
    const changeNavbarColor = () =>{
       if(window.scrollY >= 900){
         setColorchange('#0E005F');
       }
       else{
         setColorchange('transparent');
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <nav className="navbar" style={{backgroundColor:`${colorChange}`}}>
            <p className="logo">
                <a href="/">Welcome to my portafolio</a>
            </p>
            <ul className="navbar_item_list">
                <li className="navbar_item">
                    <a href="/">Home</a>
                </li>
                <li className="navbar_item">
                    <a href="/">About Me</a>
                </li>
                <li className="navbar_item">
                    <a href="/">Experience</a>
                </li>
                <li className="navbar_item">
                    <a href="/">Tecnologies</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
