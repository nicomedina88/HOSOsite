import React from 'react';
import './Banner.css'; 
import hero from '../img/fondo.jpeg';


const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1 className="big-text">Proyecto HOSO</h1>
          <p className="big-text">
            Abrazando a estudiantes del mundo
          </p>
        </div>
        <div className="banner-image">
          <img src={hero} alt="Imagen de fondo" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
