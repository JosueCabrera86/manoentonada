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

            <p className="text-lg text-zinc-900 cormorant leading-snug">
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
      subtitulo:
        "Nacida en Buenos Aires en 1978 hizo experiencia en Argentina y México. Obtiene la Lic. en Relaciones Públicas e Institucionales, es productora, actriz, y se desempeña también como Reikista, Masoterapeuta y Maestra certificada en Face Yoga por SFY",
      texto: (
        <>
          <p className="mb-4">
            Certificada además en las siguientes especialidades de SFY:
          </p>

          <ListaConIcono
            texto={`Rutina personalizada.
Rutina Avanzada.
Rutina Masculina.`}
          />
        </>
      ),
      imagen: "eugenia1",
      reverse: true,
    },
  ];
  return (
    <div>
      <section id="skills" className="bg-manoentonada">
        {skills.map((skill) => (
          <Informacion
            titulo={skill.titulo}
            subtitulo={skill.subtitulo}
            texto={skill.texto}
            imagen={skill.imagen}
            reverse={skill.reverse}
          />
        ))}
      </section>
    </div>
  );
}

export default AboutMe;
