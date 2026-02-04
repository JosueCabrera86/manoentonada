import React, { useState } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function MasajesModal({ material, nivelUsuario = 20 }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [masajeSeleccionado, setMasajeSeleccionado] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);

  const masajesBase = [
    {
      categoria: 2,
      tipo: "video",
      title: "Masaje periférico",
      url: "https://www.youtube.com/embed/SJ20LZe3RxI",
      img: "/imgminis/miniyf/1_periferico_masaje.png",
    },
    {
      categoria: 3,
      tipo: "video",
      title: "Masaje de reseteo facial",
      url: "https://www.youtube.com/embed/sG2qqWv9T9Y",
      img: "/imgminis/miniyf/2_reseteofacial_masaje.png",
    },
    {
      categoria: 4,
      tipo: "video",
      title: "Masaje de preparación facial",
      url: "https://www.youtube.com/embed/OUBvlbA8_Fk",
      img: "/imgminis/miniyf/3_preparacionfacial_masaje.png",
    },
    {
      categoria: 9,
      tipo: "video",
      title: "Masaje con guasha",
      url: "https://www.youtube.com/embed/jPAeiOlCrv0",
      img: "/imgminis/miniyf/4_guasha_masaje.png",
    },
    {
      categoria: 13,
      tipo: "video",
      title: "Masaje relajante",
      url: "https://www.youtube.com/embed/ke_h99NelDM",
      img: "/imgminis/miniyf/5_relajante_masaje.png",
    },
    {
      categoria: 19,
      tipo: "pdf",
      title: "Masaje de acupresión",
      pdf: ["Acupresion-avanzados.png"],
      img: "/imgminis/miniyf/2_infografiaacupresion_masaje.png",
    },
    {
      categoria: 20,
      tipo: "video",
      title: "6. Acupresión avanzada",
      video: "https://www.youtube.com/embed/BoCZ0nkv58M",
      img: "/imgminis/miniyf/6_acupresion_masaje.png",
    },
  ];

  const masajesFiltrados = (
    material?.length > 0 ? material : masajesBase
  ).filter((m) => (m.categoria ?? 0) <= nivelUsuario);

  const abrirModal = (masaje) => {
    setMasajeSeleccionado(masaje);
    setImagenIndex(0);
    setModalOpen(true);
  };
  const cerrarModal = () => {
    setModalOpen(false);
    setMasajeSeleccionado(null);
  };
  const cambiarImagen = (dir) => {
    if (!masajeSeleccionado?.pdf) return;
    const total = masajeSeleccionado.pdf.length;
    setImagenIndex((prev) => (prev + dir + total) % total);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {masajesFiltrados.map((m, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            onClick={() => abrirModal(m)}
            className="cursor-pointer bg-white rounded-lg overflow-hidden 
                 border border-gray-200 transition-all hover:border-sky-400"
          >
            <img
              src={m.img}
              alt={m.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-2 text-center text-lg font-medium text-sky-700">
              {m.title}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {modalOpen && masajeSeleccionado && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-4 w-full max-w-4xl mx-auto relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <button
                onClick={cerrarModal}
                className="absolute top-3 right-4 text-gray-500 text-2xl font-bold hover:text-gray-700 transition"
              >
                ✕
              </button>

              <h2 className="text-xl text-sky-700 font-bold mb-4 text-center">
                {masajeSeleccionado.title}
              </h2>

              {/* PDF */}
              {masajeSeleccionado.tipo === "pdf" &&
                masajeSeleccionado.pdf?.length > 0 && (
                  <div className="relative flex items-center justify-center w-full mb-6">
                    {masajeSeleccionado.pdf.length > 1 && (
                      <button
                        onClick={() => cambiarImagen(-1)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 
                           text-2xl text-sky-600 bg-white p-2 rounded-full shadow-md 
                           hover:scale-110 transition"
                      >
                        <FaCircleChevronLeft />
                      </button>
                    )}

                    <img
                      src={`/imgsuscriptores/${masajeSeleccionado.pdf[imagenIndex]}`}
                      alt={`Página ${imagenIndex + 1}`}
                      className="max-w-full max-h-[400px] object-contain rounded-lg"
                    />

                    {masajeSeleccionado.pdf.length > 1 && (
                      <button
                        onClick={() => cambiarImagen(1)}
                        className="absolute right-2 top-1/2 -translate-y-1/2
                           text-2xl text-sky-600 bg-white p-2 rounded-full shadow-md 
                           hover:scale-110 transition"
                      >
                        <FaCircleChevronRight />
                      </button>
                    )}
                  </div>
                )}

              {/* VIDEO */}
              {masajeSeleccionado.tipo === "video" &&
                masajeSeleccionado.url && (
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full rounded"
                      src={masajeSeleccionado.url}
                      title="Video"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MasajesModal;
