import React, { useState, useEffect } from "react";
import RutinasModal from "../Components/suscriptores/rutinas";
import ClasesExtraModal from "../Components/suscriptores/clasesExtra";
import MasajesModal from "../Components/suscriptores/masajes";
import Hero from "../Components/hero";
import { useNavigate } from "react-router-dom";
import { PiFlowerLotus } from "react-icons/pi";
import { supabase } from "../Components/client/supabaseClient";
import Informacion from "../Components/informacion";

const ListaConIcono = ({ texto }) => {
  const lineas = texto.split("\n");

  return (
    <ul className="space-y-4 text-left">
      {lineas.map((linea, index) => {
        const limpia = linea.trim();
        if (!limpia) return null;

        const esSubPunto = limpia.startsWith("*");
        const textoFinal = esSubPunto ? limpia.replace("*", "").trim() : limpia;

        return (
          <li
            key={index}
            className={`flex items-start gap-3 ${esSubPunto ? "ml-8" : ""}`}
          >
            {!esSubPunto ? (
              <div className="mt-1 flex-shrink-0">
                <PiFlowerLotus className="text-rose-400 text-xl" />
              </div>
            ) : (
              <span className="text-rose-300 ml-1">•</span>
            )}

            <p className="text-lg text-zinc-900 cormorant leading-snug">
              {textoFinal}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
function Suscriptores() {
  const [material, setMaterial] = useState({
    rutinas: [],
    masajes: [],
    clases: [],
  });
  const [nivelUsuario, setNivelUsuario] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const session = sessionData?.session;

      if (!session) {
        setError("No estás autorizado. Por favor inicia sesión.");
        return;
      }

      const userEmail = session.user.email;

      // Obtener categoría
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("categoria")
        .eq("email", userEmail)
        .single();

      if (userError || !userData) {
        console.error(userError);
        setError("No se pudo obtener tu nivel.");
        return;
      }

      setNivelUsuario(userData.categoria || 0);
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
    window.scrollTo(0, 0);
  };
  const hero = [
    {
      imagen: "yogafacial",
      titulo: "  Material Adicional",
      subtitulo: "Yoga Facial",
    },
  ];
  const datos = [
    {
      texto:
        " Contiene infografías y videos que te acompañarán en la realización de tus rutinas. Recuerda que son complementarias; revisa el material con calma y recurre a él cuantas veces sea necesario. Conforme avances en el curso, tendrás acceso a más material para que avances de manera gradual.",
      imagen: "Face-yogacolibrí",
      reverse: false,
    },
    {
      titulo: "Recuerda siempre comenzar con uno de los siguientes masajes:",
      texto: (
        <ListaConIcono
          texto={` 
            Masaje de reseteo facial.
            Masaje periférico.
            Masaje de preparación facial.
            Masaje con guasha.`}
        />
      ),
      imagen: "Face-yogacolibrí1",
      reverse: true,
    },
  ];
  return (
    <div>
      {hero.map((hero) => (
        <Hero
          imagen={hero.imagen}
          titulo={hero.titulo}
          subtitulo={hero.subtitulo}
        />
      ))}

      <section className="bg-divisiones text-center mx-auto py-10 px-4 sm:px-8 md:px-16 lg:px-28">
        <p className="flex flex-col sm:flex-row justify-center items-center gap-4 cormorant text-xl sm:text-2xl md:text-3xl text-zinc-900 italic max-w-5xl mx-auto">
          <PiFlowerLotus className="text-4xl sm:text-5xl md:text-6xl text-rose-400 shrink-0" />
          ¡Hola, nos da mucho gusto que estés aquí! Te damos la bienvenida a
          este espacio que ha sido creado para que puedas dar continuidad a tus
          sesiones de Yoga Facial.
          <PiFlowerLotus className="text-4xl sm:text-5xl md:text-6xl text-rose-400 shrink-0" />
        </p>
      </section>

      <section className="bg-yogafacial py-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto ">
          {(() => {
            const baseMasajes = [
              { categoria: 2 },
              { categoria: 3 },
              { categoria: 4 },
              { categoria: 9 },
              { categoria: 13 },
              { categoria: 19 },
            ];
            const puedeVerMasajes = baseMasajes.some(
              (m) => m.categoria <= nivelUsuario,
            );
            return (
              puedeVerMasajes && (
                <div
                  className="w-full rounded-2xl overflow-hidden shadow-md bg-white transition-all duration-300 cursor-pointer border border-sky-200 hover:shadow-xl hover:scale-[1.02]"
                  onClick={() =>
                    setMaterial({ ...material, modalActivo: "masajes" })
                  }
                >
                  <img
                    src="/imgsuscriptores/masajes.jpg"
                    alt="Masajes"
                    className="w-full h-48 object-cover object-[center_-100px]"
                  />
                  <div className="p-5">
                    <h3 className="text-2xl text-center playfairbold text-titulos mb-2">
                      Masajes
                    </h3>
                  </div>
                </div>
              )
            );
          })()}

          {(() => {
            const baseRutinas = [
              { categoria: 5 },
              { categoria: 6 },
              { categoria: 7 },
              { categoria: 8 },
              { categoria: 9 },
              { categoria: 10 },
              { categoria: 14 },
              { categoria: 15 },
              { categoria: 17 },
              { categoria: 18 },
              { categoria: 20 },
            ];
            const puedeVerRutinas = baseRutinas.some(
              (r) => r.categoria <= nivelUsuario,
            );
            return (
              puedeVerRutinas && (
                <div
                  className="w-full rounded-2xl overflow-hidden shadow-md bg-white transition-all duration-300 cursor-pointer border border-sky-200 hover:shadow-xl hover:scale-[1.02]"
                  onClick={() =>
                    setMaterial({ ...material, modalActivo: "rutinas" })
                  }
                >
                  <img
                    src="/imgsuscriptores/rutinas.jpg"
                    alt="Rutinas"
                    className="w-full h-48 object-cover object-[center_-100px]"
                  />
                  <div className="p-5">
                    <h3 className="text-2xl text-center playfairbold text-titulos mb-2">
                      Rutinas
                    </h3>
                  </div>
                </div>
              )
            );
          })()}

          {/* Clases */}
          {(() => {
            const baseClases = [
              { categoria: 1 },
              { categoria: 4 },
              { categoria: 10 },
              { categoria: 16 },
              { categoria: 21 },
            ];
            const puedeVerClases = baseClases.some(
              (c) => c.categoria <= nivelUsuario,
            );
            return (
              puedeVerClases && (
                <div
                  className="w-full rounded-2xl overflow-hidden shadow-md bg-white transition-all duration-300 cursor-pointer border border-sky-200 hover:shadow-xl hover:scale-[1.02]"
                  onClick={() =>
                    setMaterial({ ...material, modalActivo: "clases" })
                  }
                >
                  <img
                    src="/imgsuscriptores/clases.jpg"
                    alt="Clases extra"
                    className="w-full h-48 object-cover object-[center_-100px]"
                  />
                  <div className="p-5">
                    <h3 className="text-2xl text-center playfairbold text-titulos mb-2">
                      Clases Extra
                    </h3>
                  </div>
                </div>
              )
            );
          })()}
        </div>
        {material.modalActivo && (
          <div className="fixed inset-0 bg-yogafacial flex items-center justify-center z-50">
            <div className="bg-black/60 rounded-2xl p-4 sm:p-6 w-full max-w-5xl mx-4 relative overflow-y-auto max-h-[90vh] shadow-2xl">
              <button
                onClick={() => setMaterial({ ...material, modalActivo: null })}
                className="absolute top-2 right-3 text-3xl text-titulos hover:text-titulos font-bold"
              >
                ✕
              </button>

              <div className="px-2 sm:px-4">
                {material.modalActivo === "masajes" && (
                  <MasajesModal
                    material={material.masajes}
                    nivelUsuario={nivelUsuario}
                  />
                )}

                {material.modalActivo === "rutinas" && (
                  <RutinasModal
                    material={material.rutinas}
                    nivelUsuario={nivelUsuario}
                  />
                )}

                {material.modalActivo === "clases" && (
                  <ClasesExtraModal
                    material={material.clases}
                    nivelUsuario={nivelUsuario}
                  />
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center my-8">
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-[#9eb0a2] text-white rounded-2xl transition hover:scale-105"
          >
            Cerrar sesión
          </button>
        </div>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </section>
      <section className="bg-servicios">
        {datos.map((dato) => (
          <Informacion
            texto={dato.texto}
            titulo={dato.titulo}
            notas={dato.notas}
            imagen={dato.imagen}
            reverse={dato.reverse}
          />
        ))}
      </section>
    </div>
  );
}

export default Suscriptores;
