import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Spinner } from "./constantes/Spinner.jsx";
import RutasPublicas from "./routes/publicas/public.routes.js";
import RutasPrivadas from "./routes/privadas/private.routes.js";
import { AuthGuard } from "./routes/guards/AuthGuard.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/*" element={<RutasPublicas />} />
            <Route element={<AuthGuard/>}>
              <Route path="/private/*" element={<RutasPrivadas />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
