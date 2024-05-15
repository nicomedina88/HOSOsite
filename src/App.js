import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header/Header.jsx';
import Banner from './componentes/Banner/Banner.jsx';
import Carrusel from './componentes/Carrusel/Carrusel.jsx';
import Resenas from './componentes/Reseñas/Resenas.jsx';
import Contacto from './componentes/Contacto/Contacto.jsx';
import Footer from './componentes/Footer/Footer.jsx';
import Sumate from './componentes/Sumate/Sumate.jsx';
import Sobrehoso from './componentes/Sobrehoso/Sobrehoso.jsx';
import Condiciones from './componentes/Condiciones/Condiciones.jsx';
import Privacidad from './componentes/Privacidad/Privacidad.jsx';
import Login from './componentes/Login/Login.jsx';
import { list, list2 } from "./assets/cards-list";
import Cards from "./componentes/Cards/index.js";
import Filter from "./componentes/Filter/index.js";
import Header2 from "./componentes/Header2/index.js";
import { useState } from "react";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/sobre-hoso" element={<SobreHosoPage />} />
          <Route path="/sumate" element={<SumatePage />} />
          <Route path="/terminos-y-condiciones" element={<CondicionesPage />} />
          <Route path="/politicas-de-privacidad" element={<PrivacidadPage />} />
          <Route path="/login" element={<LoginPage />} />
=======
          <Route path="sobre-hoso" element={<SobreHosoPage />} />
          <Route path="sumate" element={<SumatePage />} />
          <Route path="reseñas" element={<ReseñasPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="terminos-y-condiciones" element={<CondicionesPage />} />
          <Route path="politicas-de-privacidad" element={<PrivacidadPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="alojamiento" element={<AlojamientoPage />} />
>>>>>>> fc0b0578fcee30a605f03dcf2b5f881ef84fc25b
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Carrusel />
      <Resenas />
      <Contacto />
      <Footer />
    </div>
  );
}

function SobreHosoPage() {
  return (
    <div>
      <Header />
      <Sobrehoso />
      <Footer />
    </div>
  );
}

<<<<<<< HEAD
=======
function ReseñasPage() {
  return (
    <div>
      <Header />
      <Resenas />
      <Footer />
    </div>
  );
}
>>>>>>> fc0b0578fcee30a605f03dcf2b5f881ef84fc25b

function SumatePage() {
  return (
    <div>
      <Header />
      <Sumate />
      <Footer />
    </div>
  );
}

<<<<<<< HEAD
=======
function ContactoPage() {
  return (
    <div>
      <Header />
      <Contacto />
      <Footer />
    </div>
  );
}

>>>>>>> fc0b0578fcee30a605f03dcf2b5f881ef84fc25b
function LoginPage() {
  return (
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

function CondicionesPage() {
  return (
    <div>
      <Header />
      <Condiciones />
      <Footer />
    </div>
  );
}

function PrivacidadPage() {
  return (
    <div>
      <Header />
      <Privacidad />
      <Footer />
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
function AlojamientoPage() {
  const [selectedFilter, setSelectedFilter] = useState(0);

   return (
    <div>
      <Header2 />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter === 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
   )
}

export default App;
>>>>>>> fc0b0578fcee30a605f03dcf2b5f881ef84fc25b
