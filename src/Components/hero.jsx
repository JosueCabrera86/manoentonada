import React from "react";

function Hero({ imagen, titulo, subtitulo }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={`/imgmano/${imagen}.png`}
        alt="imagen de portada"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1
          className="
            playfairbold  text-titulos  
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          "
        >
          {titulo}
        </h1>

        <h2
          className="
            figtree text-subtitulo mt-3
            text-xl sm:text-2xl md:text-3xl lg:text-4xl
          "
        >
          {subtitulo}
        </h2>
      </div>
    </div>
  );
}

export default Hero;
