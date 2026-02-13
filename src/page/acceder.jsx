import React, { useState } from "react";
import { PiEnvelopeSimple, PiLock, PiEye, PiEyeSlash } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../Components/client/supabaseClient";

const Acceder = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const Loader = () => (
    <div className="relative w-full h-1 bg-gray-300 rounded overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0d9488] to-transparent animate-[progress_1s_ease-in-out_infinite]"></div>
      <style>
        {`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}
      </style>
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Por favor ingresa email y contraseña");
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ LOGIN
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (authError) {
        setError("Email o contraseña incorrectos.");
        return;
      }

      const authUser = authData.user;

      // Guardar token
      sessionStorage.setItem("token", authData.session.access_token);

      // 2️⃣ OBTENER PERFIL
      const { data: profile, error: profileError } = await supabase
        .from("users")
        .select("*")
        .eq("auth_id", authUser.id)
        .single();

      if (profileError || !profile) {
        setError("No se pudo obtener el perfil del usuario.");
        return;
      }

      // 3️⃣ Guardar datos del usuario
      sessionStorage.setItem("user_id", profile.id);
      sessionStorage.setItem("user_email", authUser.email);
      sessionStorage.setItem("user_categoria", profile.categoria);
      sessionStorage.setItem("user_rol", profile.rol);

      // 4️⃣ Redirección única
      navigate("/suscriptores");
    } catch (err) {
      console.error("Error login:", err);
      setError("Reintenta por favor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imgmano/login.png')" }}
      >
        <div className="absolute inset-0 bg-black/20 " />
        <div className="bg-yogafacial backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 max-w-md w-full relative z-10">
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
            ¿No tienes cuenta aún? {""}
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
