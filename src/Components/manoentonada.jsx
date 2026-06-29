import React from "react";

import Hero from "./hero";
import Servicios from "./servicios";

function ManoEntonada() {
  const hero = [
    {
      imagen: "cuenco",
      titulo: "Mano Entonada",
      subtitulo: "El arte de pausar: regalarse un momento de conexión",
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
      <div className="bg-divisiones text-center py-10 px-6 sm:px-10 md:px-16 lg:px-28">
        <p className="cormorant text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-900 italic leading-relaxed max-w-4xl mx-auto">
          Mano Entonada reúne dones para ofrecer al mundo sanación y bienestar.
        </p>
      </div>

      <Servicios />
    </div>
  );
}

export default ManoEntonada;
