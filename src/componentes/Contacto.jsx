// Contacto.js

import React from 'react';
import './Contacto.css';
import internacionales from '../img/internacionales.png';



const Contacto = () => {
  const validarFormulario = () => {
    const nombre = document.querySelector('input[name="nombre"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const comentario = document.querySelector('textarea[name="comentario"]').value;

    const nombreValido = /^[a-zA-Z\s]+$/.test(nombre);
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const comentarioValido = comentario.length >= 5 && comentario.length <= 50;

    if (!nombreValido) {
      alert('Por favor, ingresa un nombre válido.');
      return false;
    }

    if (!emailValido) {
      alert('Por favor, ingresa un email válido.');
      return false;
    }

    if (!comentarioValido) {
      alert('Por favor, ingresa un comentario entre 5 y 50 caracteres.');
      return false;
    }

    return true;
  };

  const actualizarContadorCaracteres = () => {
    const textarea = document.querySelector('textarea[name="comentario"]');
    const contador = document.getElementById('contador-caracteres');
    const caracteresRestantes = 50 - textarea.value.length;
    contador.textContent = `${caracteresRestantes} caracteres restantes`;
  };

  return (
    <div className="contacto-container">
      <div className="rosado">
        <div className="contacto-info">
          <h2>CONTACTANOS</h2>
          <h4>DIRECCIÓN GENERAL DE RELACIONES INTERNACIONALES</h4>
          <div className="telefono-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.0002 10.999H22.0002C22.0002 5.869 18.1272 2 12.9902 2V4C17.0522 4 20.0002 6.943 20.0002 10.999Z" fill="#424038"/>
              <path d="M12.9998 7.99999C15.1028 7.99999 15.9998 8.89699 15.9998 11H17.9998C17.9998 7.77499 16.2248 5.99999 12.9998 5.99999V7.99999ZM16.4218 13.443C16.2296 13.2683 15.9771 13.1752 15.7176 13.1832C15.4581 13.1912 15.2118 13.2998 15.0308 13.486L12.6378 15.947C12.0618 15.837 10.9038 15.476 9.71179 14.287C8.51979 13.094 8.15879 11.933 8.05179 11.361L10.5108 8.96699C10.6972 8.78612 10.8059 8.53982 10.814 8.2802C10.822 8.02059 10.7287 7.76804 10.5538 7.57599L6.85879 3.51299C6.68384 3.32035 6.44067 3.2035 6.18095 3.18725C5.92122 3.17101 5.66539 3.25665 5.46779 3.42599L3.29779 5.28699C3.1249 5.46051 3.02171 5.69145 3.00779 5.93599C2.99279 6.18599 2.70679 12.108 7.29879 16.702C11.3048 20.707 16.3228 21 17.7048 21C17.9068 21 18.0308 20.994 18.0638 20.992C18.3083 20.9783 18.5391 20.8747 18.7118 20.701L20.5718 18.53C20.7413 18.3325 20.8271 18.0768 20.811 17.817C20.795 17.5573 20.6783 17.3141 20.4858 17.139L16.4218 13.443Z" fill="#424038"/>
            </svg>
            <p>(+54 2320) 696998</p>
          </div>
          <div className="email-container">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M20 0H0V16H20V0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#424038"/>
             </svg>
             <p>movilidadinternacional@unpaz.edu.ar</p>
          </div>
          <div className='web-container'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                 <path d="M10 0C4.475 0 0 4.475 0 10C0 15.525 4.475 20 10 20C15.525 20 20 15.525 20 10C20 4.475 15.525 0 10 0ZM10 2.5C10.825 2.5 11.6 2.725 12.35 2.975C11.825 3.475 11.225 3.925 11.325 4.375C11.425 4.825 13.05 4.7 13.05 5.625C13.05 6.3 12 6.5 12.725 7.275C13.6 8.15 11.125 9.725 11.075 10.875C11 12.95 13.175 13.3 14.9 13.3C15.95 13.3 16.225 13.8 16.15 14.4C14.8 16.325 12.5 17.525 9.975 17.525C9.025 17.525 8.15 17.3 7.325 16.975C7.875 15.875 6.625 13.7 5.45 13C4.875 12.425 3.65 12.65 2.95 12.375C2.725 11.7 2.5 11.025 2.475 10.275C2.55 10.15 2.675 10.05 2.875 10.05C3.35 10.05 4 11 4.35 10.9C4.8 10.8 2.5 7.625 3.575 7C4.075 6.7 5.075 7.975 4.75 6.6C4.45 5.325 5.65 5.9 6.4 5.575C7.05 5.3 7.525 4.55 6.725 4.1C6.575 4.025 6.4 3.85 6.175 3.625C7.3 2.95 8.6 2.525 10 2.525V2.5ZM15.775 5.225C16.225 5.775 16.575 6.375 16.875 7.025V7.1C16.775 7.275 16.6 7.375 16.325 7.65C15.625 8.35 15.525 7.125 15.225 6.875C14.9 6.575 13.725 6.925 13.575 6.55C13.4 6.1 14.825 5.5 15.775 5.225Z" fill="#424038"/>
              </svg>
              <p>www.unpaz.edu.ar/internacionales</p>
          </div>
          <div className='ubi-container'>
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                 <path d="M9 0C4.02 0 0 3.5175 0 7.875C0 13.125 9 21 9 21C9 21 18 13.125 18 7.875C18 3.5175 13.98 0 9 0ZM9 2.625C12.33 2.625 15 4.9875 15 7.875C15 10.7887 12.33 13.125 9 13.125C5.7 13.125 3 10.7887 3 7.875C3 4.9875 5.7 2.625 9 2.625Z" fill="black"/>
              </svg>
              <p>Leandro N. Alem 4673, 2° piso (José C. Paz)</p>
          </div>
        </div>
        <img src={internacionales} alt="logo rectangular" />
      </div>
      <div className="formulario">
        <h2>¿Quieres recibir más información? ¿Tenés alguna consulta para hacernos?</h2>
        <form onSubmit={validarFormulario}>
          <input type="text" name="nombre" placeholder="Tu nombre" required />
          <input type="email" name="email" placeholder="Tu email" required />
          <textarea
            name="comentario"
            placeholder="Tu mensaje"
            maxLength="50"
            onInput={actualizarContadorCaracteres}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;


