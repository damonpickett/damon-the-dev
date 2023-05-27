import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        {/* Add your logo component or image here */}
        <h1>Logo</h1>
      </div>
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        {window.innerWidth < 768 ? (
          <button className="burger" onClick={toggleMenu}>
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </button>
        ) : (
          <ul className="menu">
            <li>Home</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>About</li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
