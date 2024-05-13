import React from 'react';
import './Sobrehoso.css';
import logo6 from '../../img/hoso7.jpg';
import img2 from '../../img/RGDI3.jpg';

const Sobrehoso = () => {
  return (
    <div className="sobrehoso-container">
      <div className="mini-banner">
        <div className="title-container1">
          <h1 className="title">Sobre HOSO</h1>
        </div>
      </div>
      <div className="text-with-image-container1">
      <div className="logo-container1">
          <img src={logo6} alt="Logo del proyecto HOSO" className="logologin"/>
          <h1 className='titulogo1'>HOSO</h1>
          <h3 className="slogan1">Abrazando a estudiantes del mundo</h3>
        </div>
      <div className="text-container">
        <p className="paragraph">
        El hospedaje solidario (HS) se encuentra en el marco del programa “La UNPAZ en el mundo. 
        El mundo en la UNPAZ” de la Dirección General de Relaciones Internacionales, y tiene como objetivo 
        el enriquecimiento multicultural, ya que implica la convivencia con estudiantes de distintas partes 
        de Latinoamérica, a quienes se les ofrece alojamiento ad honorem durante el período de estancia de la 
        movilidad académica en la UNPAZ, promoviendo así la internacionalización en nuestra comunidad universitaria.
        <br />
        <br />
        En este marco, el proyecto “HOSO. Abrazando a estudiantes del mundo” surge de la necesidad de 
        responder ante la demanda de hospedaje solidario por parte de estudiantes, docentes, investigadores/as, 
        graduados/as y/o gestores extranjeros interesados en realizar un período de intercambio en la UNPAZ.
        <br />
        <br />
        “HOSO”, como la plataforma web multipantalla, viene a proponer un espacio donde almacenar, 
        consultar y modificar los datos de los/as ANFITRIONES/AS de una forma eficiente, facilitando la 
        búsqueda y el contacto de los mismos a fin de conocer su disponibilidad para recibir a un/a RESIDENTE 
        en su hogar durante el período de intercambio.
        </p>
      </div>
      </div>
      <div className="text-with-image-container-mob">
      <div className="text-container">
      <p className="paragraph">
        El hospedaje solidario (HS) se encuentra en el marco del programa “La UNPAZ en el mundo. 
        El mundo en la UNPAZ” de la Dirección General de Relaciones Internacionales, y tiene como objetivo 
        el enriquecimiento multicultural, ya que implica la convivencia con estudiantes de distintas partes 
        de Latinoamérica, a quienes se les ofrece alojamiento ad honorem durante el período de estancia de la 
        movilidad académica en la UNPAZ, promoviendo así la internacionalización en nuestra comunidad universitaria.
        <br />
        <br />
        En este marco, el proyecto “HOSO. Abrazando a estudiantes del mundo” surge de la necesidad de 
        responder ante la demanda de hospedaje solidario por parte de estudiantes, docentes, investigadores/as, 
        graduados/as y/o gestores extranjeros interesados en realizar un período de intercambio en la UNPAZ.
        <br />
        <br />
        “HOSO”, como la plataforma web multipantalla, viene a proponer un espacio donde almacenar, 
        consultar y modificar los datos de los/as ANFITRIONES/AS de una forma eficiente, facilitando la 
        búsqueda y el contacto de los mismos a fin de conocer su disponibilidad para recibir a un/a RESIDENTE 
        en su hogar durante el período de intercambio.
        </p>
      </div>
      <div className="logo-container1">
          <img src={logo6} alt="Logo del proyecto HOSO" className="logologin"/>
          <h1 className='titulogo1'>HOSO</h1>
          <h3 className="slogan1">Abrazando a estudiantes del mundo</h3>
        </div>
      </div>
      <div className="text-with-image-container">
      <div className="text-container">
        <h2 className="section-title1">Nuestros objetivos</h2>
        <p className="paragraph">
        - Simplificar el ingreso, la consulta y modificación de la información de los/as ANFITRIONES/AS 
        postulados para recibir a un/a RESIDENTE de intercambio.
        <br />
        <br />
        - Difundir el programa de HS, “La UNPAZ en el mundo. El mundo en la UNPAZ”, a fin de cubrir las 
        vacancias de ANFITRIONES/AS.
        <br /> 
        <br />
        - Posicionar a la UNPAZ en el ámbito nacional e internacional mediante el diseño y desarrollo de 
        una solución informática eficiente que se apegue a los estándares actuales de usabilidad y accesibilidad, y que sea susceptible de posicionar orgánicamente en los principales motores de búsqueda.
        <br />
        <br />
        - Ampliar y fortalecer los vínculos de cooperación internacional atento a las sinergias y 
        desafíos que presenta la virtualización y el contexto global mediante la promoción orgánica de 
        “HOSO”.
        <br />
        <br />
        - Establecer un círculo virtuoso de enriquecimiento cultural entre los actores vinculados y su 
        entorno.
        </p>
      </div>
      <img
          src={img2}
          alt="Logo del proyecto HOSO"
          className="ediuni"
        />
      </div>
    </div>
  );
};

export default Sobrehoso;