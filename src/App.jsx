
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Landig from "./page/landig";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import ScrollToHash from "./Components/scrollToHash";
import ProtectedRoute from "./Components/protectedRoute";

import "./index.css";

// Carga diferida de páginas

const YogaFacial = lazy(() => import("./page/yogafacial"));
const Acceder = lazy(() => import("./page/acceder"));
const Dashboard = lazy(() => import("./page/admin/dashboard"));
const Panel = lazy(() => import("./page/admin/panel"));
const PoliticaDePrivacidad = lazy(
  () => import("./page/politicadeprivacidad")
);
const Suscriptores = lazy(() => import("./page/suscriptores"));

function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Landig />} />

          <Route
            path="/suscriptores"
            element={
              <ProtectedRoute tipo="user">
                <Suscriptores />
              </ProtectedRoute>
            }
          />

          <Route path="/yogafacial" element={<YogaFacial />} />
          <Route path="/acceder" element={<Acceder />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/panel"
            element={
              <ProtectedRoute tipo="admin">
                <Panel />
              </ProtectedRoute>
            }
          />

          <Route
            path="/politicas"
            element={<PoliticaDePrivacidad />}
          />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
