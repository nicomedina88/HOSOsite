import './App.css';
import Nav from './componentes/Header.jsx';
import Sumate from './componentes/Sumate.jsx';
import Footer from './componentes/Footer.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <Nav/>
        <Sumate />
        <Footer />
      </header>
    </div>
  );
}

export default App;

