import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contacto = () => {
  const captchaRef = useRef(null);

  const [formData, setFormData] = useState({
    nombre: "",
    mail: "",
    subject: "",
    mensaje: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  // null | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        "service_5zz0z1a",
        "template_9v8s968",
        {
          nombre: formData.nombre,
          mail: formData.mail,
          subject: formData.subject,
          mensaje: formData.mensaje,
        },
        "SYgw9dgbQc0l2ctp2",
      );

      setStatus("success");

      setFormData({
        nombre: "",
        mail: "",
        subject: "",
        mensaje: "",
      });

      captchaRef.current.reset();
      setCaptchaValue(null);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section
      id="contacto"
      className="bg-opiniones py-16 px-4 flex flex-col items-center"
    >
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
              className="w-full p-3 rounded-2xl bg-divisiones"
              required
            />

            <input
              type="email"
              name="mail"
              placeholder="Mail"
              value={formData.mail}
              onChange={handleChange}
              className="w-full p-3 rounded-2xl bg-divisiones"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Asunto"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-2xl bg-divisiones"
              required
            />
          </div>

          <div>
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full h-[174px] p-4 rounded-2xl bg-divisiones resize-none"
              required
            />
          </div>
        </div>

        {/* CAPTCHA */}

        <div className="flex justify-center mt-6">
          <ReCAPTCHA
            sitekey="6Le7h4gsAAAAADJWeIneQ0vJjj7lMYlTyYHj1FDc"
            onChange={handleCaptcha}
            ref={captchaRef}
          />
        </div>

        {/* MENSAJES */}

        {status === "success" && (
          <p className="text-green-600 text-center mt-4">
            ✓ Mensaje enviado correctamente
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-center mt-4">
            Hubo un error o falta verificar el captcha
          </p>
        )}

        {/* BOTON */}

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#9eb0a2] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contacto;
