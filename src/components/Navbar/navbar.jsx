import "./styles/navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
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
