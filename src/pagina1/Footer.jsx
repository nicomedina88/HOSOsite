import React from 'react';
import './Footer.css';
import logo from '../img/hoso1.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Logo de HOSO" />
        <span style={{ fontSize: '24px' }}>HOSO</span>
        <p>&copy;2023 UNPAZ. Todos los derechos reservados</p>
      </div>
      <div className="info">
        <p>
          <a href="/politicas-de-privacidad">Políticas de privacidad</a>
          <span> | </span>
          <a href="/terminos-y-condiciones">Términos y condiciones</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
