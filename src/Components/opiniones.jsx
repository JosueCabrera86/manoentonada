import React from "react";

const testimonials = [
  {
    id: 1,
    imagen: "ariel",
    name: "Ariel Martínez Herrera",
    role: "Cineasta",
    text: "Tuve una sesión de reiki muy hermosa, que me conectó con imágenes muy profundas y me ayudó a verme a mi mismo desde un lugar de belleza y calma. Muy recomendado.",
  },
  {
    id: 2,
    name: "Andrea Fernández Harispe",
    imagen: "andrea",
    role: "Masoterapeuta",
    text: "Un viaje  HERMOSO hacía uno mismo...un espacio y un momento para soltar la mente... y simplemente estar allí PRESENTE en la conexión cuerpo-corazón. Muy recomendable!!!! Yo me entrego a los entonados masajes.",
  },
  {
    id: 3,
    name: "Nicté-Ha Otero",
    imagen: "nicteha",
    role: "Terapeuta Holística",
    text: "Estoy muy contenta de haberme dado la oportunidad de iniciar con Yoga facial. Durante estas semanas he experimentado un gran cambio en mi cara, lo cual me ha ayudado a sentirme mejor conmigo misma, pues desde el 2019 sufrí de parálisis facial. Intenté muchas cosas, pero hasta ahora es que pude experimentar los cambios y comprender la razón por la que lo demás no me había funcionado. Agradezco mucho el entusiasmo y la entrega para compartir sus conocimientos. Mil gracias 🙏🏼💜",
  },
];

const Opiniones = () => {
  return (
    <section className="py-16 md:py-20 bg-[#f9f7f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-light tracking-[0.15em] text-gray-500 mb-12 md:mb-16 playfaire">
          Esto opinan quienes han confiado en Mano Entonada
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 
                     hover:shadow-md transition-all duration-300 
                     flex flex-col items-center text-center"
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-200 rounded-full mb-4 
                          overflow-hidden border-2 border-[#b5c7b9]"
              >
                <img
                  src={`/imgopiniones/${item.imagen}.jpg`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-gray-800 italic text-base sm:text-lg">
                {item.name}
              </h3>

              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-400 mb-4">
                {item.role}
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opiniones;
