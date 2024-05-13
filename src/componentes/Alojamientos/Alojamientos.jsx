import React from 'react';
import './Alojamientos.css';
import internacionales from '../../img/HOSOPresentaciónoficial.jpg';


const Alojamientos = () => {
  return (
    <div>
      <div className="mini-banner">
        <div className="title-container5">
          <h1 className="title">Nuestro Programa</h1>
        </div>
      </div>
      <div className="text-with-image-container">
      <div className="text-container">
        <p className="paragraph">
        El Programa de Internacionalización Integral y Cooperación Internacional “La UNPAZ en el mundo. El mundo en la UNPAZ” (PIIyCI) -aprobado por resolución N° 38/2022- enmarca al REGLAMENTO DE ALOJAMIENTO SOLIDARIO -aprobado por Resolución CS N°154/2019 y su modificatoria R. CS N°53/2023 que prevé el pago de un “aporte para gastos de servicios básicos”-, institucionalizando el ofrecimiento de un hospedaje solidario (HS) para estudiantes, docentes, investigadores/as y gestores/as que realicen una estancia académica en la Universidad Nacional de José C. Paz.
       <br />
       <br />
       Este reglamento determina como actores participantes del HS a 
       <br />
       a) los ANFITRIONES (personas que ofrecen el alojamiento)
       <br />
       b) los RESIDENTES (personas movilizadas que realizan una estancia académica en la UNPAZ). 
       <br />
       En tal sentido, considerando el avance de las nuevas tecnologías como medio de acceso y difusión que potencian el alcance y transferencia con el territorio, se planificó el desarrollo de una plataforma web que permita conectar eficientemente a los RESIDENTES con los potenciales ANFITRIONES brindando información valiosa y actualizada, y contando con la posibilidad de extender los límites de la convocatoria vigente.
      <br />
      </p>
      </div>
      <img src={internacionales} alt="logo internacionales" className='logoint'/>
      </div>      
      <div className="text-container">
        <h3 className="section-title1">Alojamiento solidario con HOSO</h3>
        <p className="paragraph">
        El alojamiento solidario es una experiencia para recibir como ANFITRIONES a estudiantes de movilidad internacional en su casa durante un semestre académico. Tiene como objetivo el enriquecimiento multicultural ya que implica la convivencia con estudiantes de otros países a quienes se les ofrece un hogar durante el período de estancia del intercambio académico en la UNPAZ, promoviendo la internacionalización en nuestra comunidad universitaria.
        </p>
        <a href="/ruta/al/pdf/documento.pdf" target="_blank" rel="noopener noreferrer">
          <button className="pdf-button">Normas de convivencia del programa</button>
        </a>
        <p className="paragraph">
        Podes encontrar más información desde el sitio de UNPAZ https://www.unpaz.edu.ar/internacionalizacion-integral
        <br />
        ¡Mira los alojamientos que podrás encontrar si te sumas al programa con HOSO!
        </p>
      </div>
    </div>
  );
};

export default Alojamientos;