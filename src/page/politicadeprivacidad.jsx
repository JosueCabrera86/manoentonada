import React from "react";
import Hero from "../Components/hero";

function PoliticaDePrivacidad() {
  const hero = [
    {
      imagen: "cuenco",
      titulo: "Política de Privacidad",
      subtitulo: "Mano Entonada",
    },
  ];
  return (
    <div>
      {hero.map((hero) => (
        <Hero
          imagen={hero.imagen}
          titulo={hero.titulo}
          subtitulo={hero.subtitulo}
        />
      ))}
      <div className="mx-auto max-w-4xl bg-servicios p-6 shadow-sm mt-10 rounded-lg">
        <h1 className="cormorant font-bold text-center text-xl sm:text-2xl md:text-3xl text-zinc-900 italic tracking-wide">
          En Mano Entonada, valoramos tu privacidad
          <br /> Nuestras aplicaciones están diseñadas para ofrecer servicios de
          bienestar, reiki y yoga facial.
        </h1>

        <p className="cormorant mt-6 text-lg sm:text-xl md:text-2xl text-zinc-900 italic tracking-wide">
          <strong>Registro y Datos Personales:</strong> <br />
          Para acceder al material exclusivo y sesiones de la aplicación,
          solicitamos tu correo electrónico. Este dato se utiliza exclusivamente
          para: Gestionar tu acceso seguro a la plataforma. Personalizar tu
          progreso en las rutinas de yoga facial y bienestar. Enviarte
          notificaciones críticas sobre tus sesiones o actualizaciones del
          material. Cualquier dato procesado para la personalización de la
          experiencia de usuario se maneja de forma efímera siempre que no se
          requiera almacenamiento para fines de autenticación o seguridad No
          compartimos tu correo con terceros ni lo utilizamos para fines
          publicitarios ajenos a Mano Entonada sin tu consentimiento.
          <br />
          <strong> Uso de la Cámara:</strong> <br /> En el caso de las sesiones
          en vivo, la cámara se activa únicamente para dar seguimiento a tus
          ejercicos y poder acompañarte en las clases. No grabamos ni
          transmitimos imágenes a servidores externos.
          <br />
          <strong> Seguridad: </strong> <br />
          Como desarrolladores (DidascaliaDev), implementamos las mejores
          prácticas para asegurar que tu experiencia sea segura. Recopilamos
          datos de diagnóstico y fallos de manera anónima y efímera para mejorar
          la estabilidad de la aplicación
          <br />
          <strong>Control de tu Información:</strong> <br />
          Como usuario, tienes derecho a acceder, rectificar o eliminar tu
          cuenta y datos asociados en cualquier momento. Si deseas que
          eliminemos tu correo de nuestra base de datos, puedes solicitarlo
          directamente enviando un mensaje a didascaliadev@gmail.com.
          <br />
          <strong>Contacto: </strong> <br />
          Para cualquier duda, contáctanos en didascaliadev@gmail.com.
        </p>
      </div>
    </div>
  );
}

export default PoliticaDePrivacidad;
