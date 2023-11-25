import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${showMenu ? 'open' : ''}`}>
      <div className="logo">consmofeed</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
