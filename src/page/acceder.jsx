import React, { useState } from "react";
import { PiEnvelopeSimple, PiLock, PiEye, PiEyeSlash } from "react-icons/pi";
import { Link } from "react-router-dom";

const Acceder = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Accediendo con:", { email, password });
  };

  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center px-4 py-20"
        style={{ backgroundImage: "url('/imgmano/login.png')" }}
      >
        <div className="bg-yogafacial backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 max-w-md w-full">
          <div className="flex flex-col items-center mb-8">
            <img
              src="imagenes/logo_manoentonadas.png"
              alt="logo"
              className="w-25"
            />
            <h2 className="playfairbold text-3xl text-zinc-800">Bienvenida</h2>
            <p className="cormorant text-lg text-zinc-600">
              Inicia sesión en tu espacio de bienestar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label className="text-sm font-medium text-[#4B5320] ml-1 mb-1 block">
                Correo electrónico
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PiEnvelopeSimple
                    className="text-zinc-400 group-focus-within:text-[#4B5320] transition-colors"
                    size={20}
                  />
                </div>
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-[#4B5320] focus:border-emerald-900 outline-none transition-all cormorant text-lg"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-[#4B5320] ml-1">
                  Contraseña
                </label>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PiLock
                    className="text-zinc-400 group-focus-within:text-[#4B5320] transition-colors"
                    size={20}
                  />
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PiLock
                      className="text-zinc-400 group-focus-within:text-[#4B5320] transition-colors"
                      size={20}
                    />
                  </div>

                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full pl-10 pr-12 py-3 bg-white/50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-[#4B5320] focus:border-emerald-950 outline-none transition-all cormorant text-lg"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-[#4B5320] transition-colors"
                  >
                    {showPassword ? (
                      <PiEyeSlash size={20} />
                    ) : (
                      <PiEye size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#9eb0a2] text-white font-semibold py-3 rounded-full hover:bg-[#8da092] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95 mt-4"
            >
              Entrar a mi práctica
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-zinc-500">
            ¿No tienes cuenta aún?
            <Link
              to="/#contacto"
              className="text-rose-400 font-semibold hover:underline"
            >
              Únete a la comunidad
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Acceder;
