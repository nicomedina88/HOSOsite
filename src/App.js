import './App.css';
import Header from './pagina1/Header.jsx';
import Footer from './pagina1/Footer.jsx';
import Banner from './pagina1/Banner.jsx';
import Carrusel from './pagina1/Carrusel.jsx';
import Resenas from './pagina1/Resenas.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <Header /> 
        <Banner />
        <Carrusel />
        <Resenas />
        <Footer /> 
      </header>
    </div>
  );
}

export default App;

