import Banner from './componentes/Banner/Banner'
import Carrusel from './componentes/Carrusel/Carrusel'
import Resenas from './componentes/Resenas/Resenas'
import Contacto from './componentes/Contacto/Contacto'

export function HomePage() {
    return (
      <div>
        <Banner />
        <Carrusel />
        <Resenas />
        <Contacto />
      </div>
    );
  }