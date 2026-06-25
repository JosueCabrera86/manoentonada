import React from "react";
import Informacion from "./informacion";

function Servicios() {
  const servicios = [
    {
      titulo: "Yoga Facial",
      subtitulo: "Cuidado y bienestar del rostro",
      texto:
        "A través del uso de nuestras propias manos como herramientas de cambio, liberamos el estrés acumulado en los músculos faciales. Es una práctica transformadora, honrando el templo que habitas y permitiendo que tu luz interior brille con una frescura renovada y natural. Es mucho más que estética, es la expresión de la salud interna reflejada en el rostro. Los tres pilares del método que usamos son: relajación, tonificación y consciencia gestual y postural. ",
      imagen: "yogaf",
      reverse: true,
      showLink: true,
      linkText: "Quiero saber más",
      url: "/yogafacial",
    },
    {
      titulo: "Masajes",
      subtitulo: "Relajante, descontracturante y drenaje linfático",
      texto:
        "A través de nuestras manos, canalizamos la energía necesaria para liberar tensiones físicas y emocionales, permitiendo que el cuerpo recupere su equilibrio natural. Es una invitación a detenerte y permitir que la energía transformadora actúe sobre tu cuerpo, convirtiendo cada sesión en un ritual de sanación profunda y renovación vital.",
      imagen: "masajes",
      reverse: false,
      showLink: true,
      linkText: "Reserva un momento para ti",
      url: "#contacto",
    },
    {
      titulo: "Reiki",
      subtitulo: "Chakras y campos energéticos",
      texto:
        "El reiki armoniza los centros energéticos del cuerpo de una persona a través de la canalización de la energía universal. El reiki fluye a través del ser gracias al puente que son unas manos de buen tono que están al servicio con propósito. En este espacio de paz, la vibración de la transformación trabaja en tus capas más sutiles, disolviendo bloqueos y recordándote que el poder de sanar reside, fundamentalmente, en la apertura de tu propio espíritu.",
      imagen: "reiki",
      reverse: true,
      showLink: true,
      linkText: "Armoniza tu fuerza vital",
      url: "#contacto",
    },
    {
      titulo: "Registros Akáshicos",
      subtitulo: "Sabiduría del Alma",
      texto:
        "Acceder a tus Registros Akáshicos es entrar en contacto con la memoria del alma para comprender tu momento actual. Se facilita una lectura clara y amorosa que te permite escuchar palabras que vienen de un lugar superior a la mente racional. Es una oportunidad para que el individuo y su clan se reconozcan en su historia, transformando la información en sabiduría práctica para caminar con mayor consciencia y ligereza hacia su destino.",
      imagen: "registros",
      reverse: false,
      showLink: true,
      linkText: "Accede a tu lectura",
      url: "#contacto",
    },
  ];
  return (
    <div>
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
    </div>
  );
}

export default Servicios;
