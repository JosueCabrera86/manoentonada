import React from "react";

function Hero({ imagen, titulo, subtitulo }) {
  return (
    <div className="relative w-full min-h-[85vh] sm:min-h-screen overflow-hidden">
      <img
        src={`/imgmano/${imagen}.png`}
        alt="imagen de portada"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 min-h-[85vh] sm:min-h-screen">
        <h1
          className="
            playfairbold text-titulos
            text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            leading-tight tracking-wide
            max-w-5xl
          "
        >
          {titulo}
        </h1>

        <h2
          className="
            gilda text-subtitulo
            mt-4
            text-xl sm:text-xl md:text-2xl lg:text-3xl
            tracking-wide
            max-w-3xl
          "
        >
          {subtitulo}
        </h2>
      </div>
    </div>
  );
}

export default Hero;
