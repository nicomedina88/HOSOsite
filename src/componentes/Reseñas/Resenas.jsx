import React from 'react';
import './Resenas.css';
import UserIcon from '../../img/201634.png';
import UserIcon2 from '../../img/male_man_people_person_avatar_white_tone_icon_159363.png';

const Resenas = () => {
  return (
    <div className="resenas-container">
      <h1 className='titulo1'>Reseñas</h1>
      <p className='subtitulo'>¡Mirá lo que tienen para contar quienes ya pasaron por la experiencia de hospedar a estudiantes de otros países!</p>
      <div className="opiniones">
        <div className="opinion">
          <div className="icono-nombre-localidad">
            <img src={UserIcon} alt="Icono de Usuario" className="icono-usuario" />
            <div className="info-usuario">
              <p className="nombre"><strong>Nina Fraga (anfitrión)</strong></p>
              <p className="localidad">José C. Paz</p>
            </div>
          </div>
          <p className='msj'>“Fué realmente grato tener en casa a un estudiante de Venezuela. Se convivió en un ambiente muy cordial. 
            No solo nos llevamos la experiencia sino una gran persona en nuestro corazón.”</p>
        </div>
        <div className="opinion">
        <div className="icono-nombre-localidad">
            <img src={UserIcon2} alt="Icono de Usuario" className="icono-usuario" />
            <div className="info-usuario">
              <p className="nombre"><strong>Rubén Castro (anfitrión)</strong></p>
              <p className="localidad">Malvinas Arg.</p>
            </div>
          </div>
          <p className='msj'>“Ser anfitrión fué una gran experiencia, en principio teníamos muchas dudas pero la UNPAZ evacuó todas nuestras inquietudes, Y hoy estoy dispuesto a recibir mas Estudiantes que deseen ser parte de la comunidad en nuestro País”</p>
        </div>
        <div className="opinion">
        <div className="icono-nombre-localidad">
            <img src={UserIcon} alt="Icono de Usuario" className="icono-usuario" />
            <div className="info-usuario">
              <p className="nombre"><strong>Susana Lopéz (anfitrión)</strong></p>
              <p className="localidad">Muñiz</p>
            </div>
          </div>
          <p className='msj'>“Tuve el privilegio de tener en mi hogar a una estudiante de Perú y debo decir que me sentí muy a gusto. 
            Realmente es una experiencia que desearía poder repetir, porque entiendo que colaboro y fomento la cooperación”</p>
        </div>
      </div>
    </div>
  );
}

export default Resenas;