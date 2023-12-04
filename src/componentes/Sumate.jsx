// Sumate.jsx
import foto from '../img/fondo1.png';
import React from 'react';
import './Sumate.css'; // Asegúrate de importar tu archivo CSS

const Sumate = () => {
  return (
    <div className="sumate-container">
      {/* Mini banner */}
      <div className="mini-banner">
        <div className="title-container">
          <h1 className="title">Sumate</h1>
        </div>
        <img
          src={foto}
          alt="Imagen relacionada con Sobre HOSO"
          className="image"
        />
      </div>

      {/* Contenido de texto */}
      <div className="text-container">
        <h2 className="section-title">Sé parte de HOSO como anfitrión</h2>
        <p className="paragraph">
          El Programa de Internacionalización Integral y Cooperación Internacional “La UNPAZ en el mundo...
          {/* Resto del texto */}
        </p>
      </div>
    </div>
  );
};

export default Sumate;
