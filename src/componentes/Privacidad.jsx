// Privacidad.jsx
import foto from '../img/fondo1.png';
import React from 'react';
import './Privacidad.css'; // Asegúrate de importar tu archivo CSS

const Privacidad = () => {
  return (
    <div className="sumate-container">
      {/* Mini banner */}
      <div className="mini-banner">
        <div className="title-container">
          <h1 className="title">Política de Privacidad</h1>
        </div>
        <img
          src={foto}
          alt="Imagen relacionada con Sobre HOSO"
          className="image"
        />
      </div>

      {/* Contenido de texto */}
      <div className="text-container">
        <p className="paragraph">
          El Programa de Internacionalización Integral y Cooperación Internacional “La UNPAZ en el mundo...
          {/* Resto del texto */}
        </p>
      </div>
    </div>
  );
};

export default Privacidad;
