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
            El Hospedaje Solidario se encuentra en el marco del programa “La UNPAZ en el mundo, el mundo en la UNPAZ” y tiene como objetivo el intercambio intercultural.
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
