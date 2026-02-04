import React, { useState, useEffect } from "react";
import RutinasModal from "../Components/suscriptores/rutinas";
import MasajesModal from "../Components/suscriptores/masajes";
import ClasesExtraModal from "../Components/suscriptores/clasesExtra";
import { useNavigate } from "react-router-dom";

function Suscriptores() {
  const [material, setMaterial] = useState({
    rutinas: [],
    masajes: [],
    clases: [],
  });
  const [nivelUsuario, setNivelUsuario] = useState(0);
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
  return (
    <div className="mx-auto container px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <img
          src="/imgbienestar/faceyoga1.jpg"
          alt="Material adicional"
          className="w-full h-[700px] sm:h-[400px] md:h-[600px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-400 drop-shadow-lg">
            MATERIAL ADICIONAL
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl text-fuchsia-300 font-semibold drop-shadow-md">
            Yoga Facial
          </h2>
        </div>
      </div>

      <p className="flex flex-col sm:flex-row justify-center items-center gap-3 text-lg sm:text-xl text-center text-nuestro-lila mt-6 sm:mt-8">
        <GiAbstract047 className="text-xl sm:text-2xl" /> ¡Hola, nos da mucho
        gusto que estés aquí! Te damos la bienvenida a este espacio que ha sido
        creado para que puedas dar continuidad a tus sesiones de Yoga Facial.
        <GiAbstract047 className="text-xl sm:text-2xl" />
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-6 sm:mt-8 gap-6 flex-wrap">
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
                className="w-[90%] sm:w-[85%] md:w-[80%] max-w-md rounded-2xl overflow-hidden shadow-md bg-white transition-all duration-300 cursor-pointer border border-sky-200 hover:shadow-xl hover:scale-[1.02]"
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
                  <h3 className="text-xl text-center font-bold text-sky-700 mb-2">
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
                className="w-[90%] sm:w-[85%] md:w-[80%] max-w-md rounded-2xl overflow-hidden shadow-md bg-white transition-all duration-300 cursor-pointer border border-sky-200 hover:shadow-xl hover:scale-[1.02]"
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
                  <h3 className="text-xl text-center font-bold text-sky-700 mb-2">
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
                className="w-[90%] sm:w-[85%] md:w-[80%] max-w-md rounded-2xl overflow-hidden shadow-md bg-white transition-all duration-300 cursor-pointer border border-sky-200 hover:shadow-xl hover:scale-[1.02]"
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
                  <h3 className="text-xl text-center font-bold text-sky-700 mb-2">
                    Clases Extra
                  </h3>
                </div>
              </div>
            )
          );
        })()}
      </div>
      {material.modalActivo && (
        <div className="fixed inset-0 bg-violet-400 flex items-center justify-center z-50">
          <div className="bg-black/60 rounded-2xl p-6 w-full max-w-5xl mx-4 relative overflow-y-auto max-h-[90vh] shadow-2xl">
            <button
              onClick={() => setMaterial({ ...material, modalActivo: null })}
              className="absolute top-2 right-3 text-3xl text-sky-600 hover:text-sky-400 font-bold"
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
          className="px-4 py-2 bg-nuestro-lila text-white rounded hover:bg-nuestro-azul transition"
        >
          Cerrar sesión
        </button>
      </div>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6 items-center">
        <div className="flex flex-col justify-center">
          <p className="text-xl sm:text-lg text-justify">
            Contiene infografías y videos que te acompañarán en la realización
            de tus rutinas. Recuerda que son complementarias; revisa el material
            con calma y recurre a él cuantas veces sea necesario. Conforme
            avances en el curso, tendrás acceso a más material para que avances
            de manera gradual.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/imgsuscriptores/Face-yogacolibrí.jpg"
            alt="Foto portal colibrí"
            className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6 items-start">
        <div className="flex justify-center">
          <img
            src="/imgsuscriptores/Face-yogacolibrí1.jpg"
            alt="Foto portal colibrí"
            className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-cover rounded-lg"
          />
        </div>

        <div className="relative p-4 rounded-lg bg-white/10 mt-6 md:mt-12 overflow-visible pb-20 md:pb-24">
          <img
            src="/imgbienestar/logomano.png"
            alt="logo fondo"
            className="absolute bottom-0 sm:bottom-6 md:bottom-[-60px] left-1/2 transform -translate-x-1/2 w-64 sm:w-72 md:w-80 h-auto opacity-30 pointer-events-none select-none"
          />

          <p className="relative z-10 text-2xl font-bold sm:text-xl text-justify">
            Recuerda siempre comenzar con uno de los siguientes masajes:
          </p>
          <ul className="list-disc pl-5 mt-3 text-xl sm:text-lg relative z-10">
            <li className="flex items-center">
              <GiAbstract047 className="text-lg sm:text-xl text-nuestro-lila mr-2" />{" "}
              Masaje de reseteo facial.
            </li>
            <li className="flex items-center">
              <GiAbstract047 className="text-lg sm:text-xl text-nuestro-lila mr-2" />{" "}
              Masaje periférico.
            </li>
            <li className="flex items-center">
              <GiAbstract047 className="text-lg sm:text-xl text-nuestro-lila mr-2" />{" "}
              Masaje de preparación facial.
            </li>
            <li className="flex items-center">
              <GiAbstract047 className="text-lg sm:text-xl text-nuestro-lila mr-2" />{" "}
              Masaje con guasha.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Suscriptores;
