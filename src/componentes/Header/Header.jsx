import React, { useState } from 'react';
import './Header.css';
import logo from '../../img/hoso1.png';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo de HOSO" />
        </Link>
        <span style={{ fontSize: '28px' }}>HOSO</span>
      </div>
      <div className={`menu-button ${menuOpen ? 'active' : ''}`} onClick={handleMenuClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className="desktop-nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/sobre-hoso">Sobre HOSO</Link>
          </li>
          <li>
            <Link to="/sumate">Sumate</Link>
          </li>
          <li>
            <Link to="/login" className="login-button">Iniciar Sesión</Link>
          </li>
        </ul>
      </nav>
      <HamburgerMenu menuOpen={menuOpen} handleMenuClick={handleMenuClick} closeMenu={closeMenu} />
    </header>
  );
}

export default Header;
 