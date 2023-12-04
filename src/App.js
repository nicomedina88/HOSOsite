import './App.css';
import Header from './componentes/Header.js';
import Footer from './componentes/Footer.js';
import Banner from './componentes/Banner.js';
import Carrusel from './componentes/Carrusel.js';
import Resenas from './componentes/Resenas.js.jsx';
import Contacto from './componentes/Contacto.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <Header /> 
        <Banner />
        <Carrusel />
        <Resenas />
        <Contacto />
        <Footer /> 
      </header>
    </div>
  );
}

export default App;

