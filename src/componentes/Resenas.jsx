import React from 'react';
import './Resenas.css';

const Resenas = () => {
  return (
    <div className="resenas-container">
      <h1 className='titulo1'>Reseñas</h1>
      <p className='subtitulo'>¡Mira lo que tienen para contar quienes ya pasaron por la experiencia de hospedar a estudiantes de otros países...</p>
      <div className="opiniones">
        <div className="opinion">
          <p className="nombre"><strong>Nina Fraga</strong></p>
          <p className="localidad">Jose C. Paz</p>
          <p>“Fué realmente grato tener en casa a un estudiante de Venezuela. Se convivió en un ambiente muy cordial. 
            No solo nos llevamos la experiencia sino una gran persona en nuestro corazón.”</p>
        </div>
        <div className="opinion">
          <p className="nombre"><strong>Ruben Castro</strong></p>
          <p className="localidad">Malvinas Arg.</p>
          <p>“Ser anfitrión fué una gran experiencia, en principio teníamos muchas dudas pero la UNPAZ evacuó todas nuestras inquietudes, Y hoy estoy dispuesto a recibir mas Estudiantes que deseen ser parte de la comunidad en nuestro País”</p>
        </div>
        <div className="opinion">
          <p className="nombre"><strong>Susana López</strong></p>
          <p className="localidad">Muñiz</p>
          <p>“Tuve el privilegio de tener en mi hogar a una estudiante de Perú y debo decir que me sentí muy a gusto. 
            Realmente es una experiencia que desearía poder repetir, porque entiendo que colaboro y fomento la cooperación”</p>
        </div>
      </div>
    </div>
  );
}

export default Resenas;
