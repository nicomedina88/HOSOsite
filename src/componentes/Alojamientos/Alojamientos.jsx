import React from 'react';
import './Alojamientos.css';
import alojamiento1 from '../../img/alojamiento1.png';
import alojamiento2 from '../../img/alojamiento2.png';
import alojamiento3 from '../../img/alojamiento3.png';

const Alojamientos = () => {
  return (
    <div className="alojamientos-container">
      <h1 className='titulo1'>Hospédate con HOSO</h1>
      <p className='subtitulo'>¡Mira los alojamientos que puedes encontrar en HOSO!</p>
      <div className="cards">
        <div className="card">
          <img src={alojamiento1} alt="Alojamiento 1" className="imagen-alojamiento" />
          <div className="info-alojamiento">
            <p className="nombre"><strong>Nina Fraga</strong></p>
            <p className="localidad">José C. Paz</p>
          </div>
        </div>
        <div className="card">
          <img src={alojamiento2} alt="Alojamiento 2" className="imagen-alojamiento" />
          <div className="info-alojamiento">
            <p className="nombre"><strong>Rubén Castro</strong></p>
            <p className="localidad">Malvinas Arg.</p>
          </div>
        </div>
        <div className="card">
          <img src={alojamiento3} alt="Alojamiento 3" className="imagen-alojamiento" />
          <div className="info-alojamiento">
            <p className="nombre"><strong>Susana Lopez</strong></p>
            <p className="localidad">Muñiz</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alojamientos;
