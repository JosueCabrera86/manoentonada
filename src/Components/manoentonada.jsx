import React from "react";
import Informacion from "./informacion";
import Hero from "./hero";

function ManoEntonada() {
  const datos = [
    {
      texto:
        "Mano Entonada Azul (Ho Manik- Kin 187) es el sello de nacimiento según el calendario maya para Eugenia – dejando florecer la faceta de Eugenia como masoterapeuta, reikista y profesora de yoga facial – este símbolo trae curación para todo el clan, nuestro colectivo y la comunidad a la que pertenecemos.",
      imagen: "piedras",
      reverse: false,
    },
    {
      texto:
        "En la misión del día KIN 187 se descubre que el poder está en las propias manos. La mano simboliza la oportunidad de sanar; lo entonado se refiere a la buena canalización de la energía para que el propósito sea materializado; y el azul representa en el calendario maya a la raza que es de la tribu 7 (siete): la transformadora.",
      imagen: "flor",
      reverse: true,
    },
    {
      texto:
        "El Tono 5 (Entonado) propone mejorar el propio potencial. A través de la realización, de la concreción, se puede llegar aún más profundo a los sueños, y a la propia abundancia. Nos anima a ser quienes somos. Nos anima a ser nosotros mismos. Conectamos con nuestra intuición y hacemos. Una mano dormida, planificaría sin hacer nada o sería impaciente y se dejaría ganar por la ansiedad.",
      notas: "Fuente: Infinito Humano: Sabiduría Maya; Con Las Alas del Alma",
      imagen: "cuenco",
      reverse: false,
    },
  ];
  const hero = [
    {
      imagen: "cuenco",
      titulo: "Mano entonada",
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
      <div className="bg-divisiones text-center mx-auto py-12 items-center">
        <p className="cormorant text-4xl mx-28 text-zinc-900 italic">
          Mano Entonada es el nombre bajo el cual se reunen dones para sanar y
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
    </div>
  );
}

export default ManoEntonada;
