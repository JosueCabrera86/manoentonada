import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    mail: "",
    subject: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí puedes agregar la lógica para enviar el mail
  };

  return (
    <section className="bg-about py-16 px-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl playfairbold text-center text-zinc-900 mb-10 max-w-md">
        Nos encantará escucharte y ponernos en contacto contigo
      </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gilda items-start">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-3 rounded-2xl bg-divisiones border-none focus:ring-2 focus:ring-[#7A8BB2] outline-none placeholder-zinc-500"
              required
            />
            <input
              type="email"
              name="mail"
              placeholder="Mail"
              value={formData.mail}
              onChange={handleChange}
              className="w-full p-3 rounded-2xl bg-divisiones border-none focus:ring-2 focus:ring-[#7A8BB2] outline-none placeholder-zinc-500"
              required
            />{" "}
            <input
              type="subject"
              name="subject"
              placeholder="Asunto"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-2xl bg-divisiones border-none focus:ring-2 focus:ring-[#7A8BB2] outline-none placeholder-zinc-500"
              required
            />
          </div>

          <div className="h-full">
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full h-[174px] p-4 rounded-2xl bg-divisiones border-none focus:ring-2 focus:ring-[#7A8BB2] outline-none placeholder-zinc-500 resize-none"
              required
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-[#9eb0a2] text-white font-bold py-3 px-8 rounded-full transition-all duration-300  hover:shadow-lg transform hover:-translate-y-1 active:scale-95  tracking-wider text-sm"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contacto;
