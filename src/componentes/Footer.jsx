import React from 'react';
import './Footer.css';
import logo from '../img/hoso1.png';
import { InstagramIcon, MailIcon } from '../constantes/IconosHoso';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Logo de HOSO" />
        <span style={{ fontSize: '24px' }}>HOSO</span>
        <p>&copy;2023 UNPAZ. Todos los derechos reservados</p>
      </div>
      <div>
        {/* Agrega iconos de redes sociales aquí */}
        <InstagramIcon />
        <MailIcon />
      </div>
      <div className="info">
        <p>
          <Link to="/politicas-de-privacidad">Política de privacidad</Link>
          <span> | </span>
          <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
