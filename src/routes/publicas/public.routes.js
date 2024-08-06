import { lazy, Suspense } from "react";
import RutaNotFound from "../../utilities/RutaNotFound.jsx";
import { Route } from "react-router-dom";
import { HomePage } from "../../paginas/publicas/Home/HomePage.jsx";
import { Spinner } from "../../constantes/Spinner.jsx";
import LayoutPublico from "../../componentes/LayOut/publico/LayoutPublico.jsx";

const SobreHoso = lazy(() =>
  import("../../paginas/publicas/SobreHoso/SobreHosoPage.jsx")
);
const Sumate = lazy(() =>
  import("../../paginas/publicas/Sumate/SumatePage.jsx")
);
const Condiciones = lazy(() =>
  import("../../paginas/publicas/Condiciones/CondicionesPage.jsx")
);
const Privacidad = lazy(() =>
  import("../../paginas/publicas/Privacidad/PrivacidadPage.jsx")
);
const Login = lazy(() => import("../../paginas/publicas/Login/LoginPage.jsx"));


const RutasPublicas = () => {
  return (
    <LayoutPublico>
      <Suspense fallback={<Spinner />}>
        <RutaNotFound>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre-hoso" element={<SobreHoso />} />
          <Route path="/sumate" element={<Sumate />} />
          <Route path="/terminos-y-condiciones" element={<Condiciones />} />
          <Route path="/politicas-de-privacidad" element={<Privacidad />} />
        </RutaNotFound>
      </Suspense>
    </LayoutPublico>
  );
};

export default RutasPublicas;
