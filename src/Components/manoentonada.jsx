import React from "react";
import Informacion from "./informacion";
import Hero from "./hero";

function ManoEntonada() {
  const datos = [
    {
      texto:
        "Mano Entonada Azul (Ho Manik- Kin 187) es el sello de nacimiento según el calendario maya para una de nuestras integrantes – dejando florecer la faceta de Eugenia como masoterapeuta, reikista y profesora de yoga facial – este símbolo trae curación para todo el clan, nuestro colectivo y la comunidad a la que pertenecemos.",
      imagen: "piedras",
      reverse: false,
    },
    {
      texto:
        "En la misión del día KIN 187 descubrimos que el poder está en nuestras propias manos. La mano simboliza la oportunidad de sanar. “Lo entonado” hace referencia a la buena canalización de la energía para materializar el propósito. En el azul, se representa la raza que en el calendario maya es de la Tribu 7 (siete), la transformadora.",
      imagen: "flor",
      reverse: true,
    },
    {
      texto:
        "El Tono 5 (Entonado) propone mejorar el propio potencial. A través de la realización, de la concreción, se puede llegar aún más profundo a los sueños, y a la propia abundancia. Nos anima a ser quienes somos. Nos anima a ser nosotros mismos. Conectamos con nuestra intuición y hacemos; como también nos sucede como artistas y gestores de nuestras actividades. Una mano dormida, planificaría sin hacer nada o sería impaciente y se dejaría ganar por la ansiedad.",
      notas: "Fuente: Infinito Humano: Sabiduría Maya; Con Las Alas del Alma",
      imagen: "cuenco",
      reverse: false,
    },
  ];
  const hero = [
    {
      imagen: "cuenco",
      titulo: "Mano entonada",
      subtitulo: "Honra tu ser con autocuidado",
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
          Mano Entonada es el nombre bajo el cual nos reunimos en nuestros dones
          para sanar y ofrecerlos al mundo, a través de servicios y seminarios
          para el bienestar.
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
