import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiEnvelopeSimple, PiLock, PiEye, PiEyeSlash } from "react-icons/pi";

function Dashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor completa todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email no es válido.");
      return;
    }

    setLoading(true);

    try {
      // Login con Supabase
      const { data, error: authError } = await supabase.auth.signInWithPassword(
        {
          email: email.trim(),
          password,
        },
      );

      if (authError) {
        setError(authError.message);
        setLoading(false);
        return;
      }

      const user = data.user;
      const rol = user.user_metadata?.rol || "user";

      if (rol === "admin") {
        // Opcional: guardar token si quieres manejar sesión manual
        sessionStorage.setItem(
          "supabase_token",
          data.session?.access_token || "",
        );
        navigate("/panel");
      } else {
        setError("No tienes permisos para ingresar al panel.");
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError("Error del servidor. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imgmano/dashboard.png')" }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="bg-yogafacial backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 max-w-md w-full relative z-10">
          <div className="flex flex-col items-center mb-8">
            <img
              src="imagenes/logo_manoentonadas.png"
              alt="logo"
              className="w-24 mb-4"
            />
            <h1 className="playfairbold text-3xl text-zinc-800 text-center">
              ¡Hola, qué bueno verte otra vez!
            </h1>
            <p className="cormorant text-lg text-zinc-600 text-center mt-2">
              Ingresa tus datos para continuar
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
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-[#4B5320] focus:border-transparent outline-none transition-all cormorant text-lg"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Campo Contraseña */}
            <div className="relative">
              <label className="text-sm font-medium text-[#4B5320] ml-1 mb-1 block">
                Contraseña
              </label>
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
                  className="w-full pl-10 pr-12 py-3 bg-white/50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-[#4B5320] focus:border-transparent outline-none transition-all cormorant text-lg"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-[#4B5320] transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <PiEyeSlash size={20} />
                  ) : (
                    <PiEye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Mensaje de Error */}
            {error && (
              <p className="text-red-500 text-sm text-center font-medium animate-pulse">
                {error}
              </p>
            )}

            {/* Botón de Envío */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white font-semibold py-3 rounded-full transition-all shadow-md transform hover:-translate-y-0.5 active:scale-95 mt-4 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#9eb0a2] hover:bg-[#8da092] hover:shadow-lg"
              }`}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
