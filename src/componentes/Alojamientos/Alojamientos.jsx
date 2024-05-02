import React from 'react';
import './Alojamientos.css'; // Asegúrate de importar tu archivo CSS

const Alojamientos = () => {
  return (
    <div>
      {/* Mini banner */}
      <div className="mini-banner">
        <div className="title-container1">
          <h1 className="title">Nuestro Programa</h1>
        </div>
      </div>
      <div className="text-container">
        <h3 className="section-title2">Conoce nuestro programa de hospedaje</h3>
        <p className="paragraph">
        Mira nuestros alojamientos
        </p>
        <a href="/ruta/al/pdf/documento.pdf" target="_blank" rel="noopener noreferrer">
          <button className="pdf-button">Normas de convivencia del programa</button>
        </a>
      </div>
    </div>
  );
};

export default Alojamientos;