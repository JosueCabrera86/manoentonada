import React, { useState } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function RutinasModal({ material, nivelUsuario = 20 }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [rutinaSeleccionada, setRutinaSeleccionada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);

  const rutinasBase = [
    {
      categoria: 5,
      tipo: "pdf",
      title: "1. Frente y ojos",
      pdf: [
        "Frente-y-ojos-1.png",
        "Frente-y-ojos-2.png",
        "Frente-y-ojos-3.png",
        "Frente-y-ojos-4.png",
      ],
      img: "/imgminis/miniyf/1_frenteyojos_paso.png",
    },
    {
      categoria: 6,
      tipo: "video",
      title: "1. Frente y ojos",
      video: "https://www.youtube.com/embed/xW4U1i4XxJg",
      img: "/imgminis/miniyf/1_frenteyojos_rutina.png",
    },
    {
      categoria: 7,
      tipo: "pdf",
      title: "2. Una rutina para ojos",
      pdf: ["Ojos-1.png", "Ojos-2.png", "Ojos-3.png"],
      img: "/imgminis/miniyf/2_ojos_paso.png",
    },
    {
      categoria: 8,
      tipo: "video",
      title: "2. Una rutina para ojos",
      video: "https://www.youtube.com/embed/6tkfc-pobr0",
      img: "/imgminis/miniyf/2_ojos_rutina.png",
    },
    {
      categoria: 9,
      tipo: "pdf",
      title: "3. Línea facial y cuello",
      pdf: [
        "Linea-Facial-y-Cuello-1.png",
        "Linea-Facial-y-Cuello-2.png",
        "Linea-Facial-y-Cuello-3.png",
      ],
      img: "/imgminis/miniyf/3_lineafacialycuello_paso.png",
    },
    {
      categoria: 10,
      tipo: "video",
      title: "3. Línea facial y cuello",
      video: "https://www.youtube.com/embed/Q6pmDrXMROs",
      img: "/imgminis/miniyf/3_lineafacialycuello_rutina.png",
    },
    {
      categoria: 14,
      tipo: "pdf",
      title: "4. Nariz, labios y nasolabiales",
      pdf: [
        "Nariz-Labios-y-Nasolabiales-1.png",
        "Nariz-Labios-y-Nasolabiales-2.png",
        "Nariz-Labios-y-Nasolabiales-3.png",
        "Frente-y-ojos-4.png",
      ],
      img: "/imgminis/miniyf/4_narizlabiosynasolabiales_paso.png",
    },
    {
      categoria: 15,
      tipo: "video",
      title: "4. Nariz, labios y nasolabiales",
      video: "https://www.youtube.com/embed/v0nMSc7bDEI",
      img: "/imgminis/miniyf/4_narizlabiosynasolabiales_rutina.png",
    },
    {
      categoria: 17,
      tipo: "pdf",
      title: "5. Pómulos y sonrisa",
      pdf: [
        "Pomulos-y-Sonrisa-1.png",
        "Pomulos-y-Sonrisa-2.png",
        "Pomulos-y-Sonrisa-3.png",
        "Frente-y-ojos-4.png",
      ],
      img: "/imgminis/miniyf/5_pomulosysonrisa_paso.png",
    },
    {
      categoria: 18,
      tipo: "video",
      title: "5. Pómulos y sonrisa",
      video: "https://www.youtube.com/embed/uPnft5T1_Ps",
      img: "/imgminis/miniyf/5_pomulosysonrisa_paso.png",
    },
    {
      categoria: 21,
      tipo: "video",
      title: "6. Rutina avanzada",
      video: "https://www.youtube.com/embed/BoCZ0nkv58M",
      img: "/imgminis/miniyf/7_rutina_avanzada.png",
    },
  ];

  const rutinasFiltradas = (
    material?.length > 0 ? material : rutinasBase
  ).filter((r) => (r.categoria ?? 0) <= nivelUsuario);

  const abrirModal = (rutina) => {
    setRutinaSeleccionada(rutina);
    setImagenIndex(0);
    setModalOpen(true);
  };
  const cerrarModal = () => {
    setModalOpen(false);
    setRutinaSeleccionada(null);
  };
  const cambiarImagen = (dir) => {
    if (!rutinaSeleccionada?.pdf) return;
    const total = rutinaSeleccionada.pdf.length;
    setImagenIndex((prev) => (prev + dir + total) % total);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rutinasFiltradas.map((rutina, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            onClick={() => abrirModal(rutina)}
            className="cursor-pointer bg-white rounded-lg overflow-hidden 
                 border border-gray-200 transition-all hover:border-sky-400"
          >
            <img
              src={rutina.img}
              alt={rutina.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-2 text-center text-lg font-medium text-sky-700">
              {rutina.title}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {modalOpen && rutinaSeleccionada && (
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
                {rutinaSeleccionada.title}
              </h2>

              {rutinaSeleccionada.tipo === "pdf" &&
                rutinaSeleccionada.pdf?.length > 0 && (
                  <div className="relative flex items-center justify-center w-full mb-6">
                    {rutinaSeleccionada.pdf.length > 1 && (
                      <button
                        onClick={() => cambiarImagen(-1)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl text-nuestro-azul bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
                      >
                        <FaCircleChevronLeft />
                      </button>
                    )}
                    <img
                      src={`/imgsuscriptores/${rutinaSeleccionada.pdf[imagenIndex]}`}
                      alt={`Página ${imagenIndex + 1}`}
                      className="max-w-full max-h-[400px] object-contain rounded-lg"
                    />
                    {rutinaSeleccionada.pdf.length > 1 && (
                      <button
                        onClick={() => cambiarImagen(1)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl text-nuestro-azul bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
                      >
                        <FaCircleChevronRight />
                      </button>
                    )}
                  </div>
                )}

              {rutinaSeleccionada.tipo === "video" &&
                rutinaSeleccionada.video && (
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-64 md:h-80 lg:h-[400px]"
                      src={rutinaSeleccionada.video}
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

export default RutinasModal;
