import React from "react";
import Informacion from "./informacion";

function Servicios() {
  const servicios = [
    {
      titulo: "Yoga Facial",
      subtitulo: "Redescubre tu belleza natural a través de las manos",
      texto:
        "A través de ejercicios conscientes y el uso de nuestras propias manos como herramientas de cambio, liberamos el estrés acumulado en los músculos faciales. Es una práctica transformadora, honrando el templo que habitas y permitiendo que tu luz interior brille con una frescura renovada y natural, es mucho más que estética, es la expresión de la salud interna reflejada en el rostro.",
      imagen: "yogaf",
      reverse: false,
      showLink: true,
      linkText: "Quiero saber más",
      url: "/yogafacial",
    },
    {
      titulo: "Masajes",
      subtitulo: "El Arte de Sanar con el Tacto",
      texto:
        "A través de nuestras manos, canalizamos la energía necesaria para liberar tensiones físicas y emocionales, permitiendo que el cuerpo recupere su equilibrio natural. Es una invitación a detenerte y permitir que la energía transformadora actúe sobre tu cuerpo, convirtiendo cada sesión en un ritual de sanación profunda y renovación vital.",
      imagen: "masajes",
      reverse: true,
      showLink: true,
      linkText: "Reserva un momento para ti",
      url: "#contacto",
    },
    {
      titulo: "Reiki",
      subtitulo: "Canalización de Energía Vital",
      texto:
        "Cual manos con un buen tono, y al servicio de ser puente, la energía universal fluye con propósito a través del ser. El reiki es una herramienta para armonizar los centros energéticos a través de su canalización. En este espacio de paz, la vibración de la transformación trabaja en tus capas más sutiles, disolviendo bloqueos y recordándote que el poder de sanar reside, fundamentalmente, en la apertura de tu propio espíritu.",
      imagen: "reiki",
      reverse: false,
      showLink: true,
      linkText: "Armoniza tu energía",
      url: "#contacto",
    },
    {
      titulo: "Registros Akashicos",
      subtitulo: "Sabiduría del Alma",
      texto:
        "Acceder a tus Registros Akáshicos es entrar en contacto con la memoria del alma para comprender tu actual sendero. Se facilita una lectura clara y amorosa que te permite materializar respuestas. Es una oportunidad para que el clan y el individuo se reconozcan en su historia, transformando la información en sabiduría práctica para caminar con mayor consciencia y claridad hacia tu destino.",
      imagen: "registros",
      reverse: true,
      showLink: true,
      linkText: "Consulta tus registros",
      url: "#contacto",
    },
  ];
  return (
    <div>
      <div className="bg-divisiones text-center py-10 md:py-12 px-4">
        <p className="cormorant font-bold text-3xl sm:text-4xl md:text-5xl text-zinc-900 italic tracking-wide">
          Servicios
        </p>
      </div>

      <section id="servicios" className="bg-servicios">
        {servicios.map((servicio) => (
          <Informacion
            titulo={servicio.titulo}
            subtitulo={servicio.subtitulo}
            texto={servicio.texto}
            imagen={servicio.imagen}
            reverse={servicio.reverse}
            showLink={servicio.showLink}
            linkText={servicio.linkText}
            linkUrl={servicio.url}
          />
        ))}
      </section>
      <div className="bg-divisiones py-12 md:py-16 px-4 text-center">
        <p className="cormorant font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-800 italic mb-6 leading-snug max-w-3xl mx-auto">
          ¿Dudas sobre qué servicio es conveniente?
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

export default Servicios;
