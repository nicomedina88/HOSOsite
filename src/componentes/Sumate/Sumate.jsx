import React from 'react';
import './Sumate.css'; 
import estudiantes from '../../img/ESTUDIANTES11.jpeg';

const Sumate = () => {
  return (
    <div className="sumate-container">
      <div className="mini-banner">
        <div className="title-container2">
          <h1 className="title">Sumate</h1>
        </div>
      </div>
      <div className="text-with-image-container">
      <div className="text-container">
        <p className="paragraph">
        <span style={{color: 'black'}}>¡Unite Como anfitrión y brindá una experiencia inolvidable a estudiantes de Intercambio en la UNPAZ!</span>
        <br />
        <br />
        ¿Te gustaría abrir las puertas de tu hogar y de tu corazón para recibir a estudiantes de Intercambio de todo el mundo? En UNPAZ creemos en la importancia de la diversidad cultural y enriquecimiento mutuo. Es por eso que lanzamos el proyecto HOSO para el hospedaje solidario: Una oportunidad única para vos de convertirte en anfitrión y participar activamente en la experiencia educativa de éstos jóvenes.
        <br />
        <br />
        <span style={{color: 'black'}}>¿Qué implica ser Anfitrión HOSO?</span>
        <br />
        Significa mucho mas que proporcionar alojamiento. Significa compartir tu cultura, tradiciones y estilo de vida. Crear relaciones duraderas y contribuir a la internacionalozacion de nuestra universidad.
        </p>
      </div>
      <img
          src={estudiantes}
          alt="cinco estudiantes de la Unpaz reunidos para una foto"
          className="estudi"
        />
      </div>
      <div className="requirements">
        <div className="text-container">
        <h2 className="section-title1">Postulate como anfitrión</h2>
        <p className="paragraph">
        Si estás interesado en abrir las puertas de tu hogar...
        <br />
        ¡Nos encantaría conocerte más! 
        <br />
        Dejanos tus datos de contacto y
        luego te contactaremos.
        </p>
        <h4 className="section-titlemini">Requisitos principales</h4>
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
        <div className="application-container">
        <form className="application-form">
          <div className="form-group">
            <label htmlFor="name">Nombre y Apellido</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono de contacto</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Domicilio</label>
            <input type="text" id="address" name="address" />
          </div>
          <div className="form-group">
            <label htmlFor="city">Localidad</label>
            <input type="text" id="city" name="city" />
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comentarios</label>
            <textarea id="comments" name="comments"></textarea>
          </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
    </div>
    </div>
  );
};

export default Sumate;