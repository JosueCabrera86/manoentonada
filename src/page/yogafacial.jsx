import React from "react";
import Hero from "../Components/hero";
import Informacion from "../Components/informacion";
import { PiFlowerLotus } from "react-icons/pi";
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
function YogaFacial() {
  const hero = [
    {
      imagen: "yogafacial",
      titulo: "Yoga Facial",
      subtitulo: "El camino hacia tu bienestar",
    },
  ];
  const datos = [
    {
      titulo: "Nuestra Práctica",
      texto:
        'Te ayuda a conectar contigo mismo, a gestionar tus emociones y a tener una presencia más consciente en el mundo. No es solo para mujeres o para la "eterna juventud"; está pensado para hombres y mujeres de todas las edades que busquen bienestar y romper con los estereotipos de belleza impuestos. Se enfoca en la relajación, la postura y la tonificación de los músculos faciales, mejorando la circulación y reduciendo líneas de expresión. Es una herramienta poderosa para el autocuidado y para redescubrir tu belleza natural y única, esa que va más allá de los cánones, es una práctica integral que va más allá de lo estético, abordando aspectos físicos, de respiración y de la expresión consciente de la sonrisa.',
      imagen: "yogaf4",
      reverse: true,
    },
    {
      subtitulo: "Objetivos y beneficios:",

      texto: (
        <ListaConIcono
          texto={`Conexión y autoconciencia: Permite un espacio de reconexión profunda con uno mismo, fomentando el autocuidado consciente y la modificación voluntaria de gestos faciales para influir positivamente en el estado anímico.
           Gestión emocional: Ayuda a expresar emociones de forma consciente, evitando que las tensiones o conflictos acumulados en el rostro tomen el control de nuestra impronta.`}
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
      subtitulo: "DIFERENCIACIÓN Y PROPÓSITO",
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
      <div className="bg-divisiones text-center mx-auto py-12 items-center">
        <p className="cormorant text-4xl mx-28 text-zinc-900 italic">
          El Yoga Facial es más que una rutina estética. Es una disciplina
          holística para el rostro que combina movimiento, respiración y
          alegría.
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
      <section className="relative w-full py-20 bg-servicios ">
        <div className="relative max-w-6xl mx-auto h-[600px] overflow-hidden rounded-2xl shadow-xl">
          <img
            src="imgmano/nota.png"
            alt="Reflexión Yoga Facial"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative mt-[-400px] md:mt-[-500px] max-w-3xl mx-auto px-6">
          <div className="bg-white/85 backdrop-blur-md p-8 md:p-12 rounded-lg shadow-2xl border border-gray-100">
            <span className="text-sm uppercase tracking-widest text-titulos font-bold mb-4 block">
              Nota de Eugenia para quienes recién se inician en esta práctica:
            </span>

            <h2 className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-6">
              "¿A poco esto sirve de algo? "ufff” ¿todo eso voy a hacer? "¿no es
              muy ridículo ésto?”
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed font-light">
              <p>
                A veces mi ego no me dejaba hacer mi rutina, me decía a mi
                misma:
                <span className="italic"> “ufff ¿todo eso voy a hacer?”</span>.
                Otro día decía:
                <span className="italic">
                  “tantito, más tarde lo hago, ¿no es muy ridículo ésto?”
                </span>
                Y otro:
                <span className="italic">
                  “va, ¿a poco eso sirve de algo?…”
                </span>
                Y más:
                <span className="italic">
                  “esos antes y después si no son retocados, son de un día malo
                  de alguien a un día bueno.”
                </span>
              </p>
              <p className="font-medium text-gray-900 border-l-4 border-l-violet-400 pl-4 py-2">
                Hasta que dije: <br />
                – “Sí, mis días buenos los decido yo, <br />– Y hacerlo me hace
                sentir bien,
                <br />– Y esos días me amo, me cuido, me dedico tiempo a mi
                misma, <br />– Y además mi alma se siente más liviana”.
              </p>
              <p>
                Al ego no le gustó nada, ahí anda dando vueltas, refunfuñando,
                porque tiene una faceta muy negativa y le encanta el drama…
                <br />
                Sin embargo, ahí va…poco a poco, cediendo– ya encontrará otra
                cosas en las cuales oponerse.
                <br /> Pero sepan que nosotros siempre podemos orientar, desde
                un lugar superior, espiritual, a nuestro ego. <br />
                Al menos, así, dice la filosofía del Yoga 😉
                <br /> Al menos, así, un cambio por día hacía. <br />A veces de
                un pensamiento, a veces pasar un día en la naturaleza. <br />
                En mi caso fue haciendo que incorpore la práctica del yoga
                facial a mi vida cotidiana.
              </p>
              <p className="pt-4 text-sm font-semibold italic text-gray-500">
                Eugenia de Combi - Mano Entonada es Maestra Certificada en Face
                Yoga por SFY, con especializaciones en Rutina Personalizada,
                Rutina Avanzada y Rutina Masculina.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <button className="bg-[#9eb0a2] text-white font-bold py-3 px-8 rounded-full transition-all duration-300  hover:shadow-lg transform hover:-translate-y-1 active:scale-95  tracking-wider text-sm">
                  Inicia ahora
                </button>

                <p className="text-xs text-gray-900">
                  Si ya perteneces a la comunidad,{" "}
                  <a
                    href="/acceder"
                    className="underline hover:text-[#b5c7b9] transition-colors font-medium"
                  >
                    ingresa aquí
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default YogaFacial;
