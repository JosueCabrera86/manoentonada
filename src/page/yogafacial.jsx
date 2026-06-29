import React from "react";
import Hero from "../Components/hero";
import Informacion from "../Components/informacion";
import { PiFlowerLotus } from "react-icons/pi";
import { Link } from "react-router-dom";

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

            <p className="text-xl text-zinc-900 cormorant leading-snug">
              {textoFinal}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
function YogaFacial() {
  const hero = [
    {
      imagen: "yogafacial",
      titulo: "Yoga Facial",
      subtitulo: "Cuidado y bienestar consciente",
    },
  ];
  const datos = [
    {
      titulo: "Nuestra Práctica",
      texto:
        "Se enfoca en la relajación, la postura y la tonificación de los músculos faciales, mejorando la circulación y reduciendo líneas de expresión o asimetrías. Es una herramienta poderosa de autocuidado para redescubrir tu belleza natural y única, esa que va más allá de los cánones estéticos o los estereotipos impuestos. Es una práctica integral que - a través de la respiración y la expresión consciente de la sonrisa - te conecta con el momento presente. Está pensado para hombres y mujeres de todas las edades que busquen estar bien. Te ayuda a conectar contigo mismo/a, a gestionar tus emociones y a tener una presencia más consciente en el mundo.",
      imagen: "yogaf4",
      reverse: true,
    },
    {
      subtitulo: "Objetivos y beneficios:",

      texto: (
        <ListaConIcono
          texto={`Conexión y autoconciencia: Permite un espacio de reconexión profunda con uno mismo, fomentando el autocuidado consciente y la modificación voluntaria de gestos faciales para influir positivamente en el estado anímico.
           Gestión emocional: Ayuda a expresar emociones de forma consciente, evitando que las tensiones o conflictos acumulados en el rostro tomen el control de nuestra expresión.`}
        />
      ),
      imagen: "yogaf1",
      reverse: false,
    },

    {
      texto: (
        <ListaConIcono
          texto={`Bienestar integral: Dirigido a hombres y mujeres de cualquier edad, se basa en tres pilares:
      * Relajación local y periférica: Liberación de tensiones en el rostro.
      * Reeducación postural: Mejora de la conciencia corporal y facial.
      * Tonificación muscular: Fortalecimiento de ciertos músculos faciales.
      Más allá de la estética: Aunque se observan resultados como la tonificación, mejora de la circulación sanguínea y reducción de líneas de expresión, el enfoque principal no es encajar en ideales preconcebidos, sino realzar la belleza natural intrínseca de cada individuo.`}
        />
      ),
      imagen: "yogaf2",
      reverse: true,
    },
    {
      subtitulo: "Diferenciación y propósito",
      texto:
        "La práctica aborda el cuidado general de la cabeza y el rostro en rutinas de ejercicio, enfatizando la conciencia postural preventiva, la observación amorosa y la conexión entre emociones y gestos faciales. Busca recordar la belleza única que reside en cada ser humano, más allá de cánones impuestos. Es una herramienta adaptable para cualquier momento de la vida, promoviendo la introspección y la aceptación o el cambio, impactando positivamente tanto a nivel individual como comunitario.",
      imagen: "yogaf3",
      reverse: false,
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
      <div className="bg-divisiones py-12 md:py-16 px-6 sm:px-10 md:px-16 text-center">
        <p
          className="cormorant text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                text-zinc-900 italic leading-relaxed 
                max-w-4xl mx-auto"
        >
          El Yoga Facial es más que una rutina estética. Es una disciplina
          holística para el rostro que involucra respiración, movimiento y
          conciencia facial
        </p>
      </div>

      <section className="bg-yogafacial">
        {datos.map((dato) => (
          <Informacion
            titulo={dato.titulo}
            subtitulo={dato.subtitulo}
            texto={dato.texto}
            imagen={dato.imagen}
            reverse={dato.reverse}
          />
        ))}
      </section>
      <section className="bg-servicios py-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="cormorant font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-800 italic mb-6 leading-snug max-w-3xl mx-auto">
            Para ponerse en contacto e iniciar tu camino de bienestar da click
            en el botón debajo
          </p>
          <Link to="/#contacto">
            <button className="bg-[#9eb0a2] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 active:scale-95 tracking-wider text-lg">
              Formulario
            </button>
          </Link>

          <p className="text-lg md:text-2xl text-gray-900">
            Si ya perteneces a la comunidad,
            <Link
              to="/acceder"
              className="underline text-rose-400 hover:text-[#b5c7b9] transition-colors font-medium"
            >
              ingresa aquí
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default YogaFacial;
