import React from 'react';
import './Footer.css';
import logo from '../img/hoso1.png';
import logo2 from '../img/logo_unpaz_blanco.png';
import { InstagramIcon } from '../constantes/IconosHoso';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer">
      <div className="logo">
        <img src={logo} alt="Logo de HOSO" />
        <span style={{ fontSize: '24px' }}>HOSO</span>
        <p>&copy;2023 UNPAZ. Todos los derechos reservados</p>
      </div>
      <div className="social">
        {/* Agrega iconos de redes sociales aquí */}
        <InstagramIcon />
      </div>
      <div className="logo">
        <img src={logo2} alt="Logo de UNPAZ" />
      </div>
      <div className="info">
        <p>
          <Link to="/sobre-hoso">Sobre HOSO</Link>
          <span> | </span>
          <Link to="/sumate">Sumate</Link>
          <span> | </span>
          <Link to="/politicas-de-privacidad">Política de privacidad</Link>
          <span> | </span>
          <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
        </p>
      </div>
      </div>
      <div className='footermobile'>
      <div className="logo">
        <img src={logo} alt="Logo de HOSO" />
        <span style={{ fontSize: '24px' }}>HOSO</span>
      </div>
      <div className="social">
        {/* Agrega iconos de redes sociales aquí */}
        <InstagramIcon />
      </div>
      <div className="info2">
        <p>
          <Link to="/sobre-hoso">Sobre HOSO</Link>
          <span> | </span>
          <Link to="/sumate">Sumate</Link>
          <span> | </span>
          <Link to="/politicas-de-privacidad">Política de privacidad</Link>
          <span> | </span>
          <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
        </p>
      </div>
      <div className="logo">
        <img src={logo2} alt="Logo de UNPAZ" />
        <p>&copy;2023 UNPAZ. Todos los derechos reservados</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
