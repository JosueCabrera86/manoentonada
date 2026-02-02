import React from "react";
import { FiInstagram, FiFacebook } from "react-icons/fi";

function Footer() {
  return (
    <footer className="w-full">
      <div
        className="
          backdrop-blur-xl bg-yogafacial 
         shadow-xl
          px-6 md:px-12 py-4
        "
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-center">
          <div>
            <h3 className="text-titulos playfairbold text-2xl  mb-2">
              Secciones
            </h3>
            <ul className="space-y-2 text-enlace gilda text-lg">
              <li>
                <a href="/#servicios" className="hover:text-white">
                  Servicios
                </a>
              </li>

              <li>
                <a href="/yogafacial" className="hover:text-white">
                  Yoga facial
                </a>
              </li>
              <li>
                <a href="/acceder" className="hover:text-white">
                  Acceder
                </a>
              </li>
              <li>
                <a href="/#contacto" className="hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-center">
            <h2 className="text-2xl playfairbold text-titulos">
              Mano Entonada
            </h2>
            <p className="mt-2 text-enlace gilda text-lg">
              Bienestar, energía y presencia.
            </p>

            <img
              src="/imagenes/logo_manoentonadas.png"
              alt="logo mano entonada"
              className="w-32 mt-4"
            />
          </div>

          <div>
            <h3 className="text-titulos text-center text-2xl playfairbold mb-2">
              Sígueme
            </h3>

            <div className="flex justify-center md:justify-center gap-5 text-white/70 text-lg mb-6">
              <a
                href="https://www.instagram.com/manoentonadafaceyoga?igsh=MTVrdms4d2RoMWl3bA=="
                className="hover:text-white"
              >
                <FiInstagram size={25} className="text-enlace" />
              </a>
              <a
                href="https://www.facebook.com/ManoEntonadaFaceYoga"
                className="hover:text-white"
              >
                <FiFacebook size={25} className="text-enlace" />
              </a>
            </div>

            <div className="mt-4">
              <h3 className="text-titulos text-2xl playfairbold mb-3">
                Suscríbete al newsletter
              </h3>

              <form className=" gap-3 justify-center md:justify-center">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="
                    px-4 py-2 rounded-xl  text-gray-600 border-2 border-teal-600
                  
                    w-full sm:w-auto
                  "
                />
                <div>
                  <button
                    type="submit"
                    className="
                    px-6 py-2 rounded-xl 
                    bg-secundario text-enlace gilda text-lg font-semibold
                    hover:bg-secundario/80 transition
                  "
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full text-center playfairbold mt-8 text-titulos text-xl">
          © {new Date().getFullYear()} Mano Entonada — Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
