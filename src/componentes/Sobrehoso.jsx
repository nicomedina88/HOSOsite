import React from 'react';
import './Sobrehoso.css'; // Importa el archivo de estilos CSS
import foto1 from '../img/foto1.jpeg';
import foto2 from '../img/foto2.jpeg';

const Sobrehoso = () => {
  return (
    <div className="landing-section">
      <h1>SOBRE HOSO</h1>
      <p>
        El Proyecto surge de la necesidad de responder ante la demanda de Hospedaje Solidario por parte de estudiantes, docentes, investigadores y graduados/as interesados en realizar un período de intercambio en la UNPAZ.
      </p>
      <button>VER MAS</button>
      <div className="image-container">
        <img
          src={foto1}
          alt="Imagen 1"
          className="landing-image"
        />
        <img
          src={foto2}
          alt="Imagen 2"
          className="landing-image"
        />
      </div>
    </div>
  );
};

export default Sobrehoso;
