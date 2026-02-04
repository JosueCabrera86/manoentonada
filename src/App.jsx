import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Landig from "./page/landig";
import YogaFacial from "./page/yogafacial";
import Acceder from "./page/acceder";
import Footer from "./Components/footer";
import ScrollToHash from "./Components/scrollToHash";
import "./index.css";
import Dashboard from "./page/admin/dashboard";
import Panel from "./page/admin/panel";
import Suscriptores from "./page/suscriptores";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Landig />} />
        <Route path="/yogafacial" element={<YogaFacial />} />
        <Route path="/acceder" element={<Acceder />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/suscriptores" element={<Suscriptores />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
