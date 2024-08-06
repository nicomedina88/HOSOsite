import { Navigate, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AdminGuard } from "../guards/AdminGuard.jsx";
import { Spinner } from "../../constantes/Spinner.jsx";
import LayoutPrivado from "../../componentes/LayOut/privado/LayoutPrivado.jsx";
import RutaNotFound from "../../utilities/RutaNotFound.jsx";

const PerfilUsuario = lazy(() =>
  import("../../paginas/privadas/PerfilUsuario/PerfilUserPage.jsx")
);
const CentroAyuda = lazy(() =>
  import("../../paginas/privadas/CentroAyuda/CentroAyudaPage.jsx")
);
const Politicas = lazy(() =>
  import("../../paginas/privadas/Politicas/PoliticasPage.jsx")
);
const PreReservas = lazy(() =>
  import("../../paginas/privadas/Prereservas/PrereservasPage.jsx")
);
const Terminos = lazy(() =>
  import("../../paginas/privadas/Terminos/TerminosPage.jsx")
);

 function RutasPrivadas () {
  return (
    <LayoutPrivado>
      <Suspense fallback={<Spinner />}>
        <RutaNotFound>
          <Route path="/" element={<Navigate replace to={"/alojamientos"} />} />
          <Route path="/centro-ayuda" element={<CentroAyuda />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/prereservas" element={<PreReservas />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/perfil-usuario/:id" element={<PerfilUsuario />} />
          <Route element={<AdminGuard />}>
            <Route
              path="/ejemplo-admin"
              element={<h1 className="center_presentation">RUTA ADMIN DE EJEMPLO</h1>}
            />
          </Route>
        </RutaNotFound>
      </Suspense>
    </LayoutPrivado>
  );
};

export default RutasPrivadas
