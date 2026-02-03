import React from "react";

function Informacion({
  titulo,
  subtitulo,
  texto,
  notas,
  imagen,
  reverse = false,
  showLink = false,
  linkText = "",
  linkUrl = "",
  onLinkClick,
}) {
  const textOrderClass = reverse ? "md:order-2" : "md:order-1";
  const imageOrderClass = reverse ? "md:order-1" : "md:order-2";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-mano overflow-hidden">
      <div
        className={`p-4 mx-3 flex flex-col justify-center  ${textOrderClass}`}
      >
        <h1 className="playfairbold mx-3.5 font-semibold text-titulos text-3xl">
          {titulo}
        </h1>
        {subtitulo && (
          <h2 className="my-1.5 mx-3.5 text-xl gilda text-[#4B5320]">
            {subtitulo}
          </h2>
        )}
        <div className="flex items-center">
          <p className="mx-3.5 text-lg text-zinc-900 cormorant">{texto}</p>
        </div>
        {showLink && (
          <div
            className={`mt-6 flex ${reverse ? "justify-end" : "justify-start"}`}
          >
            <button
              onClick={onLinkClick}
              className="gilda text-lg italic mx-3.5 text-[#4B5320] hover:text-emerald-800 flex items-center gap-2 group transition-all duration-300"
            >
              <a
                href={linkUrl}
                className="border-b border-transparent group-hover:border-emerald-800 pb-0.5"
              >
                {linkText} →
              </a>
            </button>
          </div>
        )}
        {notas && (
          <p className="text-sm mt-8 mx-2.5 italic opacity-70">{notas}</p>
        )}
      </div>

      <div className={`${imageOrderClass} relative h-[300px] md:h-[400px]`}>
        <div className="relative w-full h-full">
          <img
            src={`/imgmano/${imagen}.png`}
            alt={`Imagen de ${imagen}`}
            className="w-full h-full object-full shadow-lg"
          />
          <div className="absolute inset-0 bg-white/15 z-10" />
        </div>
      </div>
    </section>
  );
}

export default Informacion;
