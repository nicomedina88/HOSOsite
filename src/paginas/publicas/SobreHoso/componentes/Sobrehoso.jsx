import React from 'react';
import './Sobrehoso.css';
import logo6 from '../../../../img/hoso7.jpg';
import img2 from '../../../../img/RGDI3.jpg';
import internacionales from '../../../../img/HOSOPresentaciónoficial.jpg';

const Sobrehoso = () => {
  return (
    <div className="sobrehoso-container">
      <div className="mini-banner">
        <div className="title-container1">
          <h1 className="title">Sobre HOSO</h1>
        </div>
      </div>
      <div className="text-with-image-container">
      <div className="text-container">
        <p className="paragraph">
        El proyecto “HOSO. Abrazando a estudiantes del mundo” surge de la necesidad de responder ante la demanda
        de Hospedaje Solidario (HS) por parte de estudiantes, docentes, investigadores/as, graduados/as y/o gestores
        extranjeros interesados en realizar un período de intercambio en la UNPAZ.
        <br />
        <br />
       “HOSO”, como la plataforma web multipantalla, viene a proponer un espacio donde almacenar, consultar y modificar
        los datos de los/as ANFITRIONES/AS de una forma eficiente, facilitando la búsqueda y el contacto de los mismos a fin de 
        conocer su disponibilidad para recibir a un/a RESIDENTE en su hogar durante el período de intercambio.
        </p>
      </div>
      <div className="logo-container1">
          <img src={logo6} alt="Logo del proyecto HOSO" className="logologin"/>
          <h1 className='titulogo1'>HOSO</h1>
          <h3 className="slogan1">Abrazando a estudiantes del mundo</h3>
        </div>
      </div>
      <div className="text-with-image-container">
      <img
          src={img2}
          alt="Foto de la reunion de la secretaria de relaciones internacionales con varios estudiantes que participan en el programa"
          className="fotoestudiantes"
        />
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
      </div>     
      <div className="text-container">
      <h2 className="section-title2">Nuestro Programa</h2>
        <p className="paragraph"> 
        El hospedaje solidario (HS) se encuentra en el marco del programa “La UNPAZ en el mundo. El mundo en la UNPAZ” de la Dirección 
        General de Relaciones Internacionales, y tiene como objetivo el enriquecimiento multicultural, ya que implica la convivencia con estudiantes de distintas partes de Latinoamérica, a quienes se les ofrece alojamiento ad honorem durante el período de estancia de la movilidad académica en la UNPAZ, promoviendo así la internacionalización en nuestra comunidad universitaria.
        </p>
        <img src={internacionales} alt="logo de la secretaria de relaciones internacionales de la UNPAZ con su slogan 'la unpaz en el mundo, el mundo en la Unpaz'" className="unpaz"/>
        <br />
        <p className="paragraph">
        Este Programa fue aprobado por resolución N° 38/2022- que enmarca al REGLAMENTO DE ALOJAMIENTO SOLIDARIO -aprobado por Resolución CS N°154/2019 y su modificatoria R. CS N°53/2023 que prevé el pago de un “aporte para gastos de servicios básicos”-, institucionalizando el ofrecimiento de un hospedaje solidario (HS) para estudiantes, docentes, investigadores/as y gestores/as que realicen una estancia académica en la Universidad Nacional de José C. Paz.
        <br />
        <br />
        Este reglamento determina como actores participantes del HS a los ANFITRIONES (personas que ofrecen el alojamiento), y los RESIDENTES (personas movilizadas que realizan una estancia académica en la UNPAZ). En tal sentido, considerando el avance de las nuevas tecnologías como medio de acceso y difusión que potencian el alcance y transferencia con el territorio, se planificó el desarrollo de una plataforma web que permita conectar eficientemente a los RESIDENTES con los potenciales ANFITRIONES brindando información valiosa y actualizada, y contando con la posibilidad de extender los límites de la convocatoria vigente.
        </p>
      </div>
      <div className="text-container">
        <h2 className="section-title1">¿Que es el alojamiento solidario?</h2> 
        <p className="paragraph"> 
        Es una experiencia para recibir como ANFITRIONES a estudiantes de movilidad internacional en su casa durante un semestre académico. Tiene como objetivo el enriquecimiento multicultural ya que implica la convivencia con estudiantes de otros países a quienes se les ofrece un hogar durante el período de estancia del intercambio académico en la UNPAZ, promoviendo la internacionalización en nuestra comunidad universitaria.
        </p>
        <p className="paragraph"> 
         Conoce nuestras <a href="https://drive.google.com/file/d/1EGXuhbCYEtrxTw33qIIA1GUFY7hL8u-s/view">Practicas  de convivencia.</a> 
        <br />
        <br />
        Si querés obtener más información, visitá la <a href="https://www.unpaz.edu.ar/internacionalizacion-integral">página del programa.</a>  
        </p>
    </div>
    </div>
  );
};

export default Sobrehoso;