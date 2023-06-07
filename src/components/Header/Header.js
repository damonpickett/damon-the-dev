import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo125.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <header className="wrapper">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav">
          <div className="menu-btn">
            <div className="menu-btn__burger"></div>
          </div>

          {/* FOR DESKTOP */}

          <ul className="menu">
            <li>Home</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>About</li>
          </ul>
        </div>
    </header>
    
  );
};

export default Header;