import React from "react";
import Informacion from "./informacion";
import Hero from "./hero";
import AboutMe from "./aboutMe";

function ManoEntonada() {
  const datos = [
    {
      texto:
        "Mano Entonada Azul (Ho Manik- Kin 187) es el sello de nacimiento según el calendario maya para Eugenia – dejando florecer la faceta como masoterapeuta, reikista y profesora de yoga facial – este símbolo trae curación para todo el clan, nuestro colectivo y la comunidad a la que pertenecemos.",
      imagen: "flor",
      reverse: false,
    },
  ];
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
        <p className="cormorant text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-900 italic leading-relaxed max-w-4xl mx-auto">
          Mano Entonada es el nombre bajo el cual se reúnen dones para sanar y
          ofrecerlos al mundo a través de servicios y seminarios para el
          bienestar.
        </p>
      </div>
      <section className="bg-manoentonada">
        {datos.map((dato) => (
          <Informacion
            texto={dato.texto}
            notas={dato.notas}
            imagen={dato.imagen}
            reverse={dato.reverse}
          />
        ))}
      </section>
      <AboutMe />
    </div>
  );
}

export default ManoEntonada;
