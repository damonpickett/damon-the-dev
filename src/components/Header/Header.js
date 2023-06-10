import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ReactComponent as Logo } from "../../assets/logo-square.svg";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <header className="wrapper">
      <div className="logo-holder">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="nav">
        <div
          className={isMenuOpen ? "menu-btn open" : "menu-btn"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="menu-btn__burger"></div>
        </div>

        {/* FOR DESKTOP */}

        <ul className="menu">
          <li className={currentPage === "/home" ? "active" : ""}>
            <NavLink className='navlink' to="/home">Home</NavLink>
          </li>
          <li className={currentPage === "/experience" ? "active" : ""}>
            <NavLink className='navlink' to="/experience">Experience</NavLink>
          </li>
          <li className={currentPage === "/projects" ? "active" : ""}>
            <NavLink className='navlink' to="/projects">Projects</NavLink>
          </li>
          <li className={currentPage === "/about" ? "active" : ""}>
            <NavLink className='navlink' to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
