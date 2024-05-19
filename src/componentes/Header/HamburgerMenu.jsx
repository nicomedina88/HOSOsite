import React from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

function HamburgerMenu({ menuOpen, handleMenuClick, closeMenu }) {
  return (
    <nav className={`nav ${menuOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <Link to="/" onClick={handleMenuClick}>Inicio</Link>
        </li>
        <li>
          <Link to="sobre-hoso" onClick={handleMenuClick}>Sobre HOSO</Link>
        </li>
        <li>
          <Link to="sumate" onClick={handleMenuClick}>Sumate</Link>
        </li>
        <li>
          <Link to="login" onClick={handleMenuClick} className="login-button">Iniciar Sesión</Link>
        </li>
      </ul>
      <div className="close-button" onClick={closeMenu}>&times;</div>
    </nav>
  );
}

export default HamburgerMenu;
