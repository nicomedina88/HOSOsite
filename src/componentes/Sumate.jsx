// Sumate.jsx
import foto from '../img/DGRI05.jpeg';
import React from 'react';
import './Sumate.css'; // Asegúrate de importar tu archivo CSS
import estudiantes from '../img/ESTUDIANTES11.jpeg';


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
 
      <div className="text-with-image-container">
      <div className="text-container">
        <h3 className="section-title">Sé parte de HOSO como anfitrión</h3>
        <p className="paragraph">
        <span>¡Unite Como anfitrión y brindá una experiencia inolvidable a estudiantes de Intercambio en la UNPAZ!</span>
        <br />
        ¿Te gustaría abrir las puertas de tu hogar y de tu corazón para recibir a estudiantes de Intercambio de todo el mundo? En UNPAZ creemos en la importancia de la diversidad cultural y enriquecimiento mutuo. Es por eso que lanzamos el proyecto HOSO para el hospedaje solidario: Una oportunidad única para vos de convertirte en anfitrión y participar activamente en la experiencia educativa de éstos jóvenes.
        <br />
        <br />
        <span>¿Qué implica ser Anfitrión HOSO?</span>
        <br />
        Significa mucho mas que proporcionar alojamiento. Significa compartir tu cultura, tradiciones y estilo de vida. Crear relaciones duraderas y contribuir a la internacionalozacion de nuestra universidad.
        </p>
      </div>
      <img
          src={estudiantes}
          alt="Logo del proyecto HOSO"
          className="project-logo"
        />
      </div>
      <div className="text-container">
        <h2 className="section-title">Requisitos principales</h2>
        <p className="paragraph">
        - Espacio de alojamiento en tu hogar.
        <br />
        <br />
        - Hospitalidad y buena comunicación.
        <br /> 
        <br />
        - Respeto a la privacidad.
        <br />
        <br />
        - Estar cerca de la UNPAZ.
        </p>
      </div>
      <div className="text-container">
        <h2 className="section-title">Postulate como anfitrión</h2>
        <p className="paragraph">
        Si estás interesado en abrir las puertas de tu hogar, dejanos tus datos de contacto.
        <br />
        ¡Nos encantaría conocerte más!
        <br />
        Luego te vamos a estar contactando!
        </p>
      </div>
    </div>
  );
};

export default Sumate;
