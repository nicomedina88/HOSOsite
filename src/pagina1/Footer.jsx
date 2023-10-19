import React from 'react';
import './Footer.css'; // Puedes crear un archivo CSS para estilizar el encabezado
import logo from '../img/hoso1.png'; // Ajusta la ruta de importación según tu estructura de directorios


function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Logo de HOSO" />
        <span style={{ fontSize: '24px' }}>HOSO</span>
      </div>
     
    </footer>
  );
}

export default Footer;
