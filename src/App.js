import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header.jsx';

import Banner from './componentes/Banner.jsx';
import Carrusel from './componentes/Carrusel.jsx';
import Resenas from './componentes/Resenas.jsx';
import Contacto from './componentes/Contacto.jsx';
import Footer from './componentes/Footer.jsx';
import Sumate from './componentes/Sumate.jsx';
import Sobrehoso from './componentes/Sobrehoso.jsx';

import Condiciones from './componentes/Condiciones.jsx';
import Privacidad from './componentes/Privacidad.jsx';

import Login from './componentes/Login.jsx';


function App() {
  return (
    <Router> 
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre-hoso" element={<SobreHosoPage />} />
          <Route path="sumate" element={<SumatePage />} />
          <Route path="reseñas" element={<ReseñasPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="terminos-y-condiciones" element={<CondicionesPage />} />
          <Route path="politicas-de-privacidad" element={<PrivacidadPage />} />
          
          <Route path="login" element={<LoginPage />} />
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

function ReseñasPage() {
  return (
    <div>
      <Resenas />
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

function ContactoPage() {
  return (
    <div>
      <Contacto />
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


export default App;

