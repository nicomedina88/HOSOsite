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


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-hoso" element={<SobreHosoPage />} />
          <Route path="/sumate" element={<SumatePage />} />
          <Route path="/terminos-y-condiciones" element={<CondicionesPage />} />
          <Route path="/politicas-de-privacidad" element={<PrivacidadPage />} />
          <Route path="/login" element={<LoginPage />} />
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

function SumatePage() {
  return (
    <div>
      <Header />
      <Sumate />
      <Footer />
    </div>
  );
}

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
export default App;
