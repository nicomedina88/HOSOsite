import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header/Header.jsx";
import Footer from "./componentes/Footer/Footer.jsx";
import { HomePage } from "./paginas/publicas/Home/HomePage.jsx";
import {lazy, Suspense } from "react";

const SobreHoso = lazy(()=> import('./paginas/publicas/SobreHoso/SobreHosoPage.jsx'))
const Sumate = lazy(()=> import('./paginas/publicas/Sumate/SumatePage.jsx'))
const Condiciones = lazy(()=> import('./paginas/publicas/Condiciones/CondicionesPage.jsx'))
const Privacidad = lazy(()=> import('./paginas/publicas/Privacidad/PrivacidadPage.jsx'))
const Login = lazy(()=> import('./paginas/publicas/Login/LoginPage.jsx'))

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sobre-hoso" element={<SobreHoso />} />
            <Route path="/sumate" element={<Sumate />} />
            <Route path="/terminos-y-condiciones" element={<Condiciones />} />
            <Route path="/politicas-de-privacidad" element={<Privacidad />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;