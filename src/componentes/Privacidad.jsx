// Privacidad.jsx
import React from 'react';
import './Privacidad.css'; // Asegúrate de importar tu archivo CSS

const Privacidad = () => {
  return (
    <div className="sumate-container">
      {/* Mini banner */}
      <div className="mini-banner2">
        <div className="title-container">
          <h1 className="title">Política de Privacidad</h1>
        </div>
      </div>

      {/* Contenido de texto */}
      <div className="text-container">
        <p className="paragraph">
        Con base a lo establecido en la normativa vigente en Protección de Datos de Carácter Personal, le comunicamos que sus datos serán incorporados al sistema de tratamiento de datos del Proyecto HOSO y con la finalidad de atender sus consultas. En cumplimiento con la normativa vigente, Proyecto HOSO informa que los datos serán conservados durante el plazo estrictamente necesario para cumplir con los preceptos mencionados con anterioridad.
        <br />  <br />
        Mientras no nos comunique lo contrario, entenderemos que sus datos no han sido modificados, que usted se compromete a notificarnos cualquier variación y que tenemos su consentimiento para utilizarlos para las finalidades que a ambas partes les sean beneficiosas.
        HOSO informa que procederá a tratar los datos de manera lícita, leal, transparente, adecuada, pertinente, limitada, exacta y actualizada. Es por ello que HOSO se compromete a adoptar todas las medidas razonables para que estos se supriman o rectifiquen sin dilación cuando sean inexactos.
        <br /> <br />
        De acuerdo con los derechos que le confiere el la normativa vigente en protección de datos podrá ejercer los derechos de acceso, rectificación, limitación de tratamiento, supresión, portabilidad y oposición al tratamiento de sus datos de carácter personal así como del consentimiento prestado para el tratamiento de los mismos, dirigiendo su petición a la dirección de correo electrónico info@almasveganas.org
        <br /> <br />
        Le informamos que podrá revocar en cualquier momento el consentimiento prestado a la recepción de comunicaciones comerciales enviando un e-mail a la dirección de correo electrónico: movilidadinternacional@unpaz.edu.ar
        <br />
        Podrá dirigirse a la Autoridad de Control competente para presentar la reclamación que considere oportuna.
        <br />
        El envío de estos datos implica la aceptación de esta cláusula.
        </p>
      </div>
    </div>
  );
};

export default Privacidad;
