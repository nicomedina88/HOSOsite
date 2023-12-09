import React from 'react';
import './Header.css'; // Puedes crear un archivo CSS para estilizar el encabezado
import logo from '../img/hoso1.png'; // Ajusta la ruta de importación según tu estructura de directorios
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo de HOSO" /></Link>
        <span style={{ fontSize: '24px' }}>HOSO</span>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="sobre-hoso">Sobre HOSO</Link>
          </li>
          <li>
            <Link to="sumate">Sumate</Link>
          </li>
          <li>
            <Link to="reseñas">Reseñas</Link>
          </li>
          <li>
            <Link to="contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <Link to="login"><button className="login-button bold-text">Iniciar Sesión</button></Link>
    </header>
  );
}

export default Header;
