import React from 'react';
import './Contacto.css';
import internacionales from '../img/internacionales.png';
import TextField from '@material-ui/core/TextField';
import {Telefono, MailContacto, Web, Ubicacion} from '../constantes/IconosHoso';


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
    //const contador = document.getElementById('contador-caracteres');
    const caracteresRestantes = 50 - textarea.value.length;
    //contador.textContent = `${caracteresRestantes} caracteres restantes`;
  };

  return (
    <div className="contacto-container">
      <div className="rosado">
        <div className="contacto-info">
          <h2>CONTACTANOS</h2>
          <h4>DIRECCIÓN GENERAL DE RELACIONES INTERNACIONALES</h4>
          <div className="telefono-container">
            <Telefono />
        
            <p>(+54 2320) 696998</p>
          </div>
          <div className="email-container">
            <MailContacto />
             <p>movilidadinternacional@unpaz.edu.ar</p>
          </div>
          <div className='web-container'>
            <Web />
            <p>www.unpaz.edu.ar/internacionales</p>
          </div>
          <div className='ubi-container'>
            <Ubicacion />
            <p>Leandro N. Alem 4673, 2° piso (José C. Paz)</p>
          </div>
        </div>
        <img src={internacionales} alt="logo rectangular" />
      </div>
      <div className="formulario">
        <h2>¿Quieres recibir más información? ¿Tenés alguna consulta para hacernos?</h2>
        <form className='formi'   onSubmit={validarFormulario}>
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


