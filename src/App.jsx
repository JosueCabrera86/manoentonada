import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Landig from "./page/landig";
import YogaFacial from "./page/yogafacial";
import Acceder from "./page/acceder";
import Footer from "./Components/footer";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landig />} />
        <Route path="/yogafacial" element={<YogaFacial />} />
        <Route path="/acceder" element={<Acceder />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
