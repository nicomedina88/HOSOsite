import './App.css';
import Header from './componentes/Header.jsx';
import Footer from './componentes/Footer.jsx';
import Banner from './componentes/Banner.jsx';
import Carrusel from './componentes/Carrusel.jsx';
import Contacto from './componentes/Contacto.jsx';
import Resenas from './componentes/Resenas.jsx';

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

