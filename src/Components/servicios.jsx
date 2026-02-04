import React from "react";
import Informacion from "./informacion";

function Servicios() {
  const servicios = [
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
        'Como "Mano Entonada", servimos de puente para que la energía universal fluya con propósito hacia tu ser. El Reiki es nuestra herramienta para armonizar tus centros energéticos, logrando esa "buena canalización" que nos caracteriza. En este espacio de paz, la vibración azul de la transformación trabaja en tus capas más sutiles, disolviendo bloqueos y recordándote que el poder de sanar reside, fundamentalmente, en la apertura de tu propio espíritu.',
      imagen: "reiki",
      reverse: false,
      showLink: true,
      linkText: "Armoniza tu energía",
      url: "#contacto",
    },
    {
      titulo: "Registros Akashicos",
      subtitulo: "Sabiduría para el Propósito",
      texto:
        "Acceder a tus Registros Akáshicos es entrar en contacto con la memoria del alma para comprender tu misión actual. Bajo la guía de nuestra esencia entonada, facilitamos una lectura clara y amorosa que te permite materializar respuestas y sanar linajes. Es una oportunidad para que el clan y el individuo se reconozcan en su historia, transformando la información en sabiduría práctica para caminar con mayor consciencia y claridad hacia tu destino.",
      imagen: "registros",
      reverse: true,
      showLink: true,
      linkText: "Consulta tus registros",
      url: "#contacto",
    },
    {
      titulo: "Yoga Facial",
      subtitulo: "Cuidado y bienestar consciente",
      texto:
        "A través de ejercicios conscientes y el uso de nuestras propias manos como herramientas de cambio, liberamos el estrés acumulado en los músculos faciales. Es una práctica transformadora, honrando el templo que habitas y permitiendo que tu luz interior brille con una frescura renovada y natural, es mucho más que estética, es la expresión de la salud interna reflejada en el rostro.",
      imagen: "yogaf",
      reverse: false,
      showLink: true,
      linkText: "Quiero saber más",
      url: "/yogafacial",
    },
  ];
  return (
    <div>
      <div className="bg-divisiones text-center mx-auto py-12 items-center">
        <p className="cormorant font-bold text-4xl mx-28 text-zinc-900 italic">
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
      <div className="bg-divisiones py-16 text-center">
        <p className="cormorant font-bold text-4xl text-zinc-800 italic mb-4">
          ¿Dudas sobre qué servicio es conveniente?
        </p>
        <a
          href="#contacto"
          className="gilda text-2xl text-emerald-900 underline-offset-4 hover:decoration-emerald-800 hover:underline transition-all"
        >
          Escribe para encontrar lo más adecuado a tu circunstancia actual →
        </a>
      </div>
    </div>
  );
}

export default Servicios;
