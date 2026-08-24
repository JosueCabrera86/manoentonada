import React from "react";
import Informacion from "./informacion";
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

            <p className="text-xl md:text-lg text-zinc-900 cormorant leading-snug">
              {textoFinal}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

function AboutMe() {
  const skills = [
    {
      titulo: "Eugenia de Combi",
      subtitulo: "Masoterapeuta holística, reikista y maestra de yoga facial.",
      texto: (
        <>
          <p className="text-xl md:text-lg mb-4">
            También es actriz, productora y licenciada en relaciones públicas e
            institucionales. En Yoga facial se certica en las siguientes
            especialidades de SFY:
          </p>

          <ListaConIcono
            texto={`Rutina Personalizada.
Rutina Avanzada.
Rutina Masculina.`}
          />
        </>
      ),
      imagen: "Euge",
      reverse: true,
    },
    {
      texto:
        "Mano Entonada Azul (Ho Manik- Kin 187) es el sello de nacimiento según el calendario maya para Eugenia – dejando florecer la faceta como masoterapeuta, reikista y profesora de yoga facial – este símbolo trae curación para todo el clan, nuestro colectivo y la comunidad a la que pertenecemos.",
      imagen: "loto",
      reverse: false,
    },
  ];
  return (
    <div>
      <div className="bg-divisiones text-center py-10 md:py-12 px-4">
        <p className="cormorant text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-900 italic leading-relaxed max-w-4xl mx-auto">
          ¿De quién son estas manos entonadas?
        </p>
      </div>
      <section id="skills" className="bg-manoentonada">
        {skills.map((skill, index) => (
          <Informacion
            key={index}
            titulo={skill.titulo}
            subtitulo={skill.subtitulo}
            texto={skill.texto}
            imagen={skill.imagen}
            reverse={skill.reverse}
          />
        ))}
      </section>
      <div className="bg-divisiones py-12 md:py-16 px-4 text-center">
        <p className="cormorant font-bold text-2xl sm:text-2xl md:text-3xl text-zinc-800 italic mb-6 leading-snug max-w-3xl mx-auto">
          Si necesitas más información, no dudes en contactarme.
        </p>

        <a
          href="#contacto"
          className="gilda text-base sm:text-lg md:text-xl text-emerald-900 
               hover:text-emerald-800 
               transition-colors duration-300"
        >
          Escribe para encontrar lo más adecuado a tu circunstancia actual →
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
