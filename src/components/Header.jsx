import React from 'react';
import './Header.css'; // Puedes crear un archivo CSS para estilizar el encabezado
import logo from '../img/hoso1.png'; // Ajusta la ruta de importación según tu estructura de directorios


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo de HOSO" />
        <span style={{ fontSize: '24px' }}>HOSO</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#sobre-hoso">Sobre HOSO</a></li>
          <li><a href="#sumate">Sumate</a></li>
          <li><a href="#reseñas">Reseñas</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
      <button className="login-button bold-text">Iniciar Sesión</button>
    </header>
  );
}

export default Header;
