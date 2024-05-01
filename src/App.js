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
import Header2 from "./componentes/Header2/Header2.js";
import { useState } from "react";
import Cards from "./componentes/Cards/Cards.js";
import Filter from "./componentes/Filter/Filter.js";
import { list, list2 } from "./assets/cards-list";
import Alojamientos from "./componentes/Alojamientos/Alojamientos.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-hoso" element={<SobreHosoPage />} />
          <Route path="/sumate" element={<SumatePage />} />
          <Route path="/alojamientos" element={<AlojamientosPage />} />
          <Route path="/terminos-y-condiciones" element={<CondicionesPage />} />
          <Route path="/politicas-de-privacidad" element={<PrivacidadPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/hoso" element={<HosoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Banner />
      <Carrusel />
      <Resenas />
      <Contacto />
    </div>
  );
}

function SobreHosoPage() {
  return (
    <div>
      <Sobrehoso />
    </div>
  );
}


function SumatePage() {
  return (
    <div>
      <Sumate />
    </div>
  );
}

function AlojamientosPage() {
  return (
    <div>
      <Alojamientos />
    </div>
  );
}

function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  );
}

function CondicionesPage() {
  return (
    <div>
      <Condiciones />
    </div>
  );
}

function PrivacidadPage() {
  return (
    <div>
      <Privacidad />
    </div>
  );
}

function HosoPage() {
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
  );
}

export default App;
