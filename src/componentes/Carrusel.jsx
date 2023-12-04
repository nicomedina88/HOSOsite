import React, { useState, useEffect } from 'react';
import './Carrusel.css';
import foto1 from '../img/foto1.jpeg';
import foto2 from '../img/foto2.jpeg';
import foto3 from '../img/foto3.jpeg';

function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      title: 'Nuestro programa',
      text: 'El Hospedaje Solidario se encuentra en el marco del programa “La UNPAZ en el mundo, el mundo en la UNPAZ” y tiene como objetivo el intercambio intercultural.',
      image: foto1,
      buttonLabel: 'Más información',
      link: '#seccion1',
    },
    {
      title: 'Sobre HOSO',
      text: 'El Proyecto surge de la necesidad de responder ante la demanda de Hospedaje Solidario por parte de estudiantes, docentes, investigadores y graduados/as interesandos en realizar un período de intercambio en la UNPAZ...',
      image: foto2,
      buttonLabel: 'Ver más',
      link: '#seccion2',
    },
    {
      title: 'Sumate',
      text: '¿Querés ser parte de una experiencia enriquecedora y brindar un cálido alojamiento a académicos extranjeeros que vienen a nuestra universidad? ¡Unite a nosotros como anfitrión solidario y compartí tu hogar con personas de diferentes culturas!',
      image: foto3,
      buttonLabel: 'Más información',
      link: '#seccion3',
    },
  ];

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Cuando currentIndex cambia, establece la opacidad en 1 después de un breve retraso
    const items = document.querySelectorAll('.carrusel-item');
    
    items.forEach(item => {
      item.style.opacity = 0;
      
      // Programa un cambio en la opacidad después de un breve retraso
      setTimeout(() => {
        item.style.opacity = 1;
      }, 1000); // Cambiar la opacidad después de 1 segundo
    });
  }, [currentIndex]);
  
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, data.length]);

  return (
    <div className="carrusel-container" style={{ backgroundColor: '#FAC1B8' }}>
      <div className="carrusel-content">
        <div className="carrusel-text carrusel-item">
          <h2>{data[currentIndex].title}</h2>
          <p>{data[currentIndex].text}</p>
          <a href={data[currentIndex].link}>
            <button style={{ backgroundColor: '#393121' }}>{data[currentIndex].buttonLabel}</button>
          </a>
        </div>
        <div className="carrusel-image carrusel-item">
          <img src={data[currentIndex].image} alt={data[currentIndex].title} />
        </div>
      </div>
      <div className="carrusel-indicators">
        {data.map((_, index) => (
          <span
            key={index}
            className={`carrusel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;
