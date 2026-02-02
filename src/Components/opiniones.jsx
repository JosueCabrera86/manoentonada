import React from "react";

const testimonials = [
  {
    id: 1,
    imagen: "sandra",
    name: "Sandra Erosa.",
    role: "Terapeuta y profesora",
    text: "Por momentos fue como tener 10 masajistas a la vez. La energía súper balanceada, manos mágicas, fuertes y a la vez con una dulzura indescriptible. Una de mis mejores experiencias definitivamente.",
  },
  {
    id: 2,
    name: "Andrea Fernández",
    imagen: "andrea",
    role: "Masoterapeuta",
    text: "Un viaje  HERMOSO hacía uno mismo...un espacio y un momento para soltar la mente... y simplemente estar allí PRESENTE en la conexión cuerpo-corazón. Muy recomendabe!!!! Yo me entrego a los entonados masajes.",
  },
  {
    id: 3,
    name: "Nicté-Ha Otero",
    imagen: "nicteha",
    role: "Terapeuta Holística",
    text: "Estoy muy contenta de haberme dado la oportunidad de iniciar con Yoga facial. Durante estás semanas he experimentado un gran cambio en mi cara, lo cual me ha ayudado a sentirme mejor conmigo misma, pues desde el 2019 sufrí de una parálisis facial, intenté muchas cosas, pero hasta ahora es que pude experimentar los cambios y comprender la razón por la que lo demás no me funcionó. Agradezco mucho el entusiasmo y la entrega para compartir sus conocimientos. Mil gracias 🙏🏼💜",
  },
];

const Opiniones = () => {
  return (
    <section className="py-20 bg-[#f9f7f5]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl font-light tracking-[0.2em] text-gray-500 mb-16 playfaire">
          Esto opinan quienes han confiado en Mano entonada
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 overflow-hidden border-2 border-[#b5c7b9]">
                <img src={`/imgopiniones/${item.imagen}.jpg`} alt={item.name} />
              </div>
              <h3 className="font-semibold text-gray-800 italic">
                {item.name}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">
                {item.role}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed italic">
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
