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
      {/* ================= TEXTO ================= */}
      <div
        className={`
      px-6 py-10 sm:px-10 md:px-16
      flex flex-col justify-center
      ${textOrderClass}
    `}
      >
        <h1 className="playfairbold font-semibold text-titulos text-2xl sm:text-3xl md:text-4xl mb-4 leading-tight">
          {titulo}
        </h1>

        {subtitulo && (
          <h2 className="mb-3 text-lg sm:text-xl gilda text-[#4B5320]">
            {subtitulo}
          </h2>
        )}

        <p className="text-base sm:text-lg text-zinc-900 cormorant leading-relaxed max-w-xl">
          {texto}
        </p>

        {showLink && (
          <div
            className={`mt-6 flex ${
              reverse ? "md:justify-end justify-start" : "justify-start"
            }`}
          >
            <a
              href={linkUrl}
              onClick={onLinkClick}
              className="
            gilda text-base sm:text-lg italic
            text-[#4B5320]
            hover:text-emerald-800
            border-b border-transparent
            hover:border-emerald-800
            pb-0.5
            transition-all duration-300
          "
            >
              {linkText} →
            </a>
          </div>
        )}

        {notas && (
          <p className="text-sm mt-8 italic opacity-70 max-w-lg">{notas}</p>
        )}
      </div>

      {/* ================= IMAGEN ================= */}
      <div
        className={`
      ${imageOrderClass}
      relative
      h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]
    `}
      >
        <div className="relative w-full h-full">
          <img
            src={`/imgmano/${imagen}.png`}
            alt={`Imagen de ${imagen}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/15 z-10" />
        </div>
      </div>
    </section>
  );
}

export default Informacion;
