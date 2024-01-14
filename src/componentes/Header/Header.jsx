import React, { useState } from 'react';
import './Header.css';
import logo from '../../img/hoso1.png';
import { Link } from 'react-router-dom';

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
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="sobre-hoso" onClick={handleMenuClick}>
              Sobre HOSO
            </Link>
          </li>
          <li>
            <Link to="sumate" onClick={handleMenuClick}>
              Sumate
            </Link>
          </li>
          <li>
            <Link to="reseñas" onClick={handleMenuClick}>
              Reseñas
            </Link>
          </li>
          <li>
            <Link to="contacto" onClick={handleMenuClick}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="login" onClick={handleMenuClick} className="login-button">
              Iniciar Sesión
            </Link>
          </li>
        </ul>
        <div className="close-button" onClick={closeMenu}>
          &times; {/* Esto es una 'X' para cerrar el menú */}
        </div>
      </nav>
    </header>
  );
}

export default Header;