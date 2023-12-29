// Sobrehoso.jsx
import foto from '../img/DGRI01.png';
import React from 'react';
import './Sobrehoso.css'; // Asegúrate de importar tu archivo CSS
import internacionales from '../img/HOSOPresentaciónoficial.jpg';
import logo6 from '../img/hoso6.png';
import edificio from '../img/UNPAZ.jpeg'

const Sobrehoso = () => {
  return (
    <div className="sobrehoso-container">
      {/* Mini banner */}
      <div className="mini-banner">
        <div className="title-container1">
          <h1 className="title">Sobre HOSO</h1>
        </div>
        <img src={foto} alt="Imagen relacionada con Sobre HOSO" className="image1"/>
      </div>
      <div className="text-with-image-container">
      <div className="text-container">
        <h2 className="section-title1">Antecedentes</h2>
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
      <br />
       En esta etapa inicial del proyecto “HOSO. Abrazando a estudiantes del mundo” pretende cubrir las necesidades locales e institucionales de la UNPAZ, pero poniendo en perspectiva, con este desarrollo tecnológico, el beneficio común de todo el sistema universitario nacional e internacional, público y privado.
      <br />
        </p>
      </div>
      <img src={internacionales} alt="logo internacionales" className='logoint'/>
      </div>
      <div className="text-with-image-container">
      <img src={logo6} alt="Logo del proyecto HOSO" className="project-logo" />
      <div className="text-container">
        <h2 className="section-title1">¿Qué es HOSO?</h2>
        <p className="paragraph">
        El proyecto “HOSO. Abrazando a estudiantes del mundo” surge de la necesidad de responder ante la demanda de hospedaje solidario por parte de estudiantes, docentes, investigadores/as, graduados/as y/o gestores extranjeros interesados en realizar un período de intercambio en la UNPAZ.
        <br />
        <br />
        El hospedaje solidario (HS) se encuentra en el marco del programa “La UNPAZ en el mundo. El mundo en la UNPAZ” de la Dirección General de Relaciones Internacionales, y tiene como objetivo el enriquecimiento multicultural, ya que implica la convivencia con estudiantes de distintas partes de Latinoamérica, a quienes se les ofrece alojamiento ad honorem durante el período de estancia de la movilidad académica en la UNPAZ, promoviendo así la internacionalización en nuestra comunidad universitaria.
        <br />
        <br />
        En este marco, “HOSO”, la plataforma web multipantalla, viene a proponer un espacio donde almacenar, consultar y modificar los datos de los/as ANFITRIONES/AS de una forma eficiente, facilitando la búsqueda y el contacto de los mismos a fin de conocer su disponibilidad para recibir a un/a RESIDENTE en su hogar durante el período de intercambio.
        </p>
      </div>
      </div>
      <div className="text-with-image-container">
      <div className="text-container">
        <h2 className="section-title1">Nuestros objetivos</h2>
        <p className="paragraph">
        - Simplificar el ingreso, la consulta y modificación de la información de los/as ANFITRIONES/AS postulados para recibir a un/a RESIDENTE de intercambio.
        <br />
        <br />
        - Difundir el programa de HS, “La UNPAZ en el mundo. El mundo en la UNPAZ”, a fin de cubrir las vacancias de ANFITRIONES/AS.
        <br /> 
        <br />
        - Posicionar a la UNPAZ en el ámbito nacional e internacional mediante el diseño y desarrollo de una solución informática eficiente que se apegue a los estándares actuales de usabilidad y accesibilidad, y que sea susceptible de posicionar orgánicamente en los principales motores de búsqueda.
        <br />
        <br />
        - Ampliar y fortalecer los vínculos de cooperación internacional atento a las sinergias y desafíos que presenta la virtualización y el contexto global mediante la promoción orgánica de “HOSO”.
        <br />
        <br />
        - Establecer un círculo virtuoso de enriquecimiento cultural entre los actores vinculados y su entorno.
        <br />
        </p>
      </div>
      <img
          src={edificio}
          alt="Logo del proyecto HOSO"
          className="ediuni"
        />
      </div>
    </div>
  );
};

export default Sobrehoso;
 