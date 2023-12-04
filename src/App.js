import './App.css';
import Header from './componentes/Header.jsx';
import Footer from './componentes/Footer.jsx';
import Sobrehoso from './componentes/Sobrehoso.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <Header /> 
        <Sobrehoso />
        <Footer /> 
      </header>
    </div>
  );
}

export default App;

