import React from "react";
import { FiInstagram, FiFacebook } from "react-icons/fi";

function Footer() {
  return (
    <footer className="w-full">
      <div
        className="
          backdrop-blur-xl bg-yogafacial
          shadow-xl
          px-4 sm:px-8 md:px-12 py-10
        "
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-titulos playfairbold text-xl sm:text-2xl mb-4">
              Secciones
            </h3>

            <ul className="space-y-2 text-enlace gilda text-base sm:text-lg">
              <li>
                <a href="/#servicios" className="hover:text-white transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/yogafacial" className="hover:text-white transition">
                  Yoga facial
                </a>
              </li>
              <li>
                <a href="/acceder" className="hover:text-white transition">
                  Acceder
                </a>
              </li>
              <li>
                <a href="/#contacto" className="hover:text-white transition">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/politicas" className="hover:text-white transition">
                  Politica de Privacidad
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl playfairbold text-titulos">
              Mano Entonada
            </h2>

            <p className="mt-2 text-enlace gilda text-base sm:text-lg">
              Bienestar, energía y presencia.
            </p>

            <img
              src="/imagenes/logo_manoentonadas.png"
              alt="logo mano entonada"
              className="w-24 sm:w-28 md:w-32 mt-4"
            />
          </div>

          <div>
            <h3 className="text-titulos text-xl sm:text-2xl playfairbold mb-4">
              Sígueme
            </h3>

            <div className="flex justify-center gap-6 text-lg ">
              <a
                href="https://www.instagram.com/manoentonadafaceyoga?igsh=MTVrdms4d2RoMWl3bA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FiInstagram size={24} className="text-enlace" />
              </a>

              <a
                href="https://www.facebook.com/ManoEntonadaFaceYoga"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FiFacebook size={24} className="text-enlace" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full text-center playfairbold  text-titulos text-sm sm:text-base">
          © {new Date().getFullYear()} Mano Entonada — Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
