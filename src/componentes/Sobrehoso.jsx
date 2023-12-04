// Sobrehoso.jsx
import foto from '../img/fondo1.png';
import React from 'react';
import './Sobrehoso.css'; // Asegúrate de importar tu archivo CSS

const Sobrehoso = () => {
  return (
    <div className="sobrehoso-container">
      {/* Mini banner */}
      <div className="mini-banner">
        <div className="title-container">
          <h1 className="title">Sobre HOSO</h1>
        </div>
        <img
          src={foto}
          alt="Imagen relacionada con Sobre HOSO"
          className="image"
        />
      </div>

      {/* Contenido de texto */}
      <div className="text-container">
        <h2 className="section-title">Antecedentes</h2>
        <p className="paragraph">
        El Programa de Internacionalización Integral y Cooperación Internacional “La UNPAZ en el mundo. El mundo en la UNPAZ” (PIIyCI) -aprobado por resolución N° 38/2022- enmarca al REGLAMENTO DE ALOJAMIENTO SOLIDARIO -aprobado por Resolución CS N°154/2019 y su modificatoria R. CS N°53/2023 que prevé el pago de un “aporte para gastos de servicios básicos”-, institucionalizando el ofrecimiento de un hospedaje solidario (HS) para estudiantes, docentes, investigadores/as y gestores/as que realicen una estancia académica en la Universidad Nacional de José C. Paz.
       <br />
       <br />
       Este reglamento determina como actores participantes del HS a a) los ANFITRIONES (personas que ofrecen el alojamiento), y b) los RESIDENTES (personas movilizadas que realizan una estancia académica en la UNPAZ). En tal sentido, considerando el avance de las nuevas tecnologías como medio de acceso y difusión que potencian el alcance y transferencia con el territorio, se planificó el desarrollo de una plataforma web que permita conectar eficientemente a los RESIDENTES con los potenciales ANFITRIONES brindando información valiosa y actualizada, y contando con la posibilidad de extender los límites de la convocatoria vigente.
      <br />
      <br />
       En esta etapa inicial del proyecto “HOSO. Abrazando a estudiantes del mundo” pretende cubrir las necesidades locales e institucionales de la UNPAZ, pero poniendo en perspectiva, con este desarrollo tecnológico, el beneficio común de todo el sistema universitario nacional e internacional, público y privado.
      <br />
      <br />
        </p>
      </div>
    </div>
  );
};

export default Sobrehoso;
 