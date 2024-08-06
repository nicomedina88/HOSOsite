import React from 'react';
import './Footer.css';
import logo from '../../../../img/hoso1.png';
import logo2 from '../../../../img/logo_unpaz_blanco.png';
import { InstagramIcon } from '../../../../constantes/IconosHoso'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo de HOSO" />
        </Link>
        <span style={{ fontSize: '20px' }}>HOSO</span>
        <p>&copy;2024 UNPAZ. Todos los derechos reservados</p>
      </div>
      <div className="social">
        <InstagramIcon />
      </div>
      <div className="logo">
        <a href="https://www.unpaz.edu.ar" target="_blank" rel="noopener noreferrer">
            <img src={logo2} alt="Logo de UNPAZ" />
        </a>
      </div>
      <div className="info">
        <p>
          <Link to="/">Inicio</Link>
          <span> | </span>
          <Link to="/sobre-hoso">Sobre HOSO</Link>
          <span> | </span>
          <Link to="/sumate">Sumate</Link>
          <span> | </span>
          <Link to="/politicas-de-privacidad">Políticas de privacidad</Link>
          <span> | </span>
          <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
        </p>
      </div>
      </div>
      <div className='footermobile'>
      <div className="logo-mob">
        <Link to="/">
          <img src={logo} alt="Logo de HOSO" />
        </Link>
        <span style={{ fontSize: '40px' }}>HOSO</span>
      </div>
      <div className="social">
        <InstagramIcon />
      </div>
      <div className="info2">
        <p>
          <Link to="/">Inicio</Link>
          <Link to="/sobre-hoso">Sobre HOSO</Link>
          <Link to="/sumate">Sumate</Link>
          <Link to="/politicas-de-privacidad">Políticas de privacidad</Link>
          <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
        </p>
      </div>
      <div className="logo2">
        <a href="https://www.unpaz.edu.ar" target="_blank" rel="noopener noreferrer">
            <img src={logo2} alt="Logo de UNPAZ" />
        </a>
        <p>&copy;2024 UNPAZ. Todos los derechos reservados</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;