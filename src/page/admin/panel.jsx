import React, { useState, useEffect } from "react";
import {
  PiEye,
  PiEyeSlash,
  PiEnvelopeSimple,
  PiLock,
  PiUser,
  PiUsers,
  PiTrash,
  PiPencilSimple,
  PiPlusCircle,
} from "react-icons/pi";
import { useNavigate, Link } from "react-router-dom";

function Panel() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [categoria, setCategoria] = useState(null);
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [applyCategoria, setApplyCategoria] = useState(false);
  const [currentValues, setCurrentValues] = useState({});
  const [session, setSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);

  const resetForm = () => {
    setNombre("");
    setEmail("");
    setCategoria(null);
    setPassword("");
    setRol("");
    setError("");
    setShowPassword(false);
    setApplyCategoria(false);
    setCurrentValues({});
  };

  // -------------------- SESSION --------------------
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoadingSession(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_e, s) =>
      setSession(s),
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!loadingSession && session) fetchUsuarios();
  }, [loadingSession, session]);

  const fetchUsuarios = async () => {
    try {
      if (!session || !session.access_token) {
        setError("No hay sesión activa. Por favor inicia sesión.");
        return;
      }

      const resp = await fetch(
        "https://backendmanoentonada.onrender.com/admin/users",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
        },
      );

      if (!resp.ok) throw new Error("Error cargando usuarios");

      const data = await resp.json();
      setUsuarios(data || []);
      console.log("USER FRONT:", data);
    } catch (err) {
      setError(err.message);
    }
  };

  // -------------------- SELECCIÓN --------------------
  const toggleSeleccionado = (authId) => {
    setSeleccionados((prev) =>
      prev.includes(authId)
        ? prev.filter((x) => x !== authId)
        : [...prev, authId],
    );
  };
  const handleRowClick = (user) => {
    if (seleccionados.length > 1) return;
    setSeleccionados([user.auth_id]);
    setCurrentValues(user);

    setNombre("");
    setCategoria(null);
    setDisciplina("");

    setModal("editar");
  };

  // -------------------- SUBMIT --------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let url = "";
      let method = "";
      let body = {};

      if (modal === "agregar") {
        url = "https://backendmanoentonada.onrender.com/users";
        method = "POST";
        body = {
          email,
          password,
          name: nombre,
          rol,
          categoria: categoria === null ? null : parseInt(categoria, 10),
          disciplina,
        };
      }

      if (modal === "editar") {
        url = "https://backendmanoentonada.onrender.com/users";
        method = "PATCH";

        body = {
          id: currentValues.auth_id,
        };

        if (nombre && nombre !== currentValues.name) {
          body.name = nombre;
        }

        if (categoria !== null && categoria !== currentValues.categoria) {
          body.categoria = categoria;
        }

        if (disciplina && disciplina !== currentValues.disciplina) {
          body.disciplina = disciplina;
        }

        if (password) {
          body.password = password;
        }
      }

      if (modal === "editar_masa" && applyCategoria && categoria !== null) {
        url = "https://backendmanoentonada.onrender.com/users/multiple";
        method = "PATCH";
        body = {
          ids: seleccionados,
          categoria: parseInt(categoria, 10),
        };
      }

      if (modal === "borrar") {
        if (!currentValues?.auth_id) {
          throw new Error("Usuario no válido");
        }

        url = `https://backendmanoentonada.onrender.com/users/${currentValues.auth_id}`;
        method = "DELETE";
      }

      const resp = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: modal !== "borrar" ? JSON.stringify(body) : undefined,
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        const message =
          typeof data?.error === "string"
            ? data.error
            : data?.message || "Error en la acción";

        throw new Error(message);
      }

      await fetchUsuarios();
      resetForm();
      setModal(null);
      setSeleccionados([]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // -------------------- LOGOUT --------------------
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/imgmano/dashboard.png')" }} // Fondo consistente
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />{" "}
      {/* Overlay suave */}
      <div className="container mx-auto p-4 relative z-10">
        {/* --- ESTADO DE CARGA --- */}
        {loadingSession && (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-nuestro-lila"></div>
          </div>
        )}

        {/* --- PANTALLA DE ACCESO DENEGADO --- */}
        {!loadingSession && !session && (
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="bg-yogafacial backdrop-blur-lg p-10 rounded-3xl shadow-xl text-center border border-white">
              <h2 className="playfairbold text-2xl mb-6 text-titulos">
                Panel de Administración
              </h2>
              <p className="cormorant text-lg mb-6">
                Debes iniciar sesión para gestionar la comunidad.
              </p>
              <Link to="/dashboard">
                <button className="px-8 py-3 bg-[#9eb0a2] text-white rounded-full hover:bg-[#8da092] transition shadow-md">
                  Iniciar sesión
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* --- PANEL PRINCIPAL --- */}
        {!loadingSession && session && (
          <div className="py-10">
            <header className="flex flex-col items-center mb-10">
              <img
                src="imagenes/logo_manoentonadas.png"
                alt="logo"
                className="w-20 mb-4"
              />
              <h1 className="playfairbold text-4xl text-zinc-800 text-center">
                Gestión de Alumnas
              </h1>
            </header>

            {/* BARRA DE ACCIONES */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => {
                  setModal("agregar");
                  resetForm();
                }}
                className="flex items-center gap-2 px-5 py-2 bg-[#9eb0a2] text-white rounded-full hover:bg-[#8da092] transition shadow-sm"
              >
                <PiPlusCircle size={20} /> Agregar
              </button>
              <button
                onClick={() => {
                  setModal("editar");
                }}
                className="flex items-center gap-2 px-5 py-2 bg-nuestro-lila text-white rounded-full hover:opacity-90 transition shadow-sm"
              >
                <PiPencilSimple size={20} /> Editar
              </button>
              <button
                onClick={() => {
                  setModal("editar_masa");
                }}
                className="flex items-center gap-2 px-5 py-2 bg-zinc-600 text-white rounded-full hover:bg-zinc-700 transition shadow-sm"
              >
                <PiUsers size={20} /> Edición Masiva
              </button>
              <button
                onClick={() => {
                  if (seleccionados.length !== 1)
                    return alert("Selecciona un usuario");
                  setModal("borrar");
                }}
                className="flex items-center gap-2 px-5 py-2 bg-rose-400 text-white rounded-full hover:bg-rose-500 transition shadow-sm"
              >
                <PiTrash size={20} /> Borrar
              </button>
            </div>

            {/* TABLA ESTILO VIDRIO */}
            <div className="bg-white/60 backdrop-blur-md border border-white shadow-2xl rounded-3xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#9eb0a2]/20 text-[#4B5320] cormorant text-xl">
                      <th className="p-4 font-semibold">Sel.</th>
                      <th className="p-4 font-semibold">Nombre</th>
                      <th className="p-4 font-semibold">Email</th>
                      <th className="p-4 font-semibold text-center">
                        Categoría
                      </th>
                      <th className="p-4 font-semibold">Rol</th>
                    </tr>
                  </thead>
                  <tbody className="cormorant text-lg">
                    {usuarios.map((u) => (
                      <tr
                        key={u.auth_id}
                        className={`border-t border-white/40 cursor-pointer transition-colors ${seleccionados.includes(u.auth_id) ? "bg-[#9eb0a2]/30" : "hover:bg-white/40"}`}
                        onClick={() => handleRowClick(u)}
                      >
                        <td
                          className="p-4"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input
                            type="checkbox"
                            className="accent-[#4B5320] w-4 h-4"
                            checked={seleccionados.includes(u.auth_id)}
                            onChange={() => toggleSeleccionado(u.auth_id)}
                          />
                        </td>
                        <td className="p-4 font-medium text-zinc-800">
                          {u.name}
                        </td>
                        <td className="p-4 text-zinc-600">{u.email}</td>
                        <td className="p-4 text-center">
                          <span className="bg-white/80 px-3 py-1 rounded-full text-sm border border-[#9eb0a2]">
                            {u.categoria ?? "N/A"}
                          </span>
                        </td>
                        <td className="p-4 capitalize">{u.rol}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <button
                onClick={handleLogout}
                className="text-zinc-500 hover:text-rose-400 transition underline underline-offset-4"
              >
                Cerrar sesión de administrador
              </button>
            </div>
          </div>
        )}
      </div>
      {/* --- MODALES CON ESTILO FORMULARIO --- */}
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4">
          <div className="bg-yogafacial p-8 rounded-3xl shadow-2xl border border-white w-full max-w-md relative animate-in fade-in zoom-in duration-200">
            <h2 className="playfairbold text-2xl text-zinc-800 mb-6 text-center capitalize">
              {modal.replace("_", " ")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campos dinámicos según el modal */}
              {modal === "agregar" && (
                <>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#4B5320] ml-1">
                      NOMBRE COMPLETO
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Maria Lopez"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full p-3 bg-white/50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-[#9eb0a2] cormorant"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#4B5320] ml-1">
                      CORREO
                    </label>
                    <input
                      type="email"
                      placeholder="email@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 bg-white/50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-[#9eb0a2] cormorant"
                    />
                  </div>
                </>
              )}

              {/* ... Los select y otros inputs siguen la misma lógica de estilo ... */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#4B5320] ml-1">
                  CATEGORÍA (DÍA)
                </label>
                <select
                  value={categoria ?? ""}
                  onChange={(e) =>
                    setCategoria(
                      e.target.value === ""
                        ? null
                        : parseInt(e.target.value, 10),
                    )
                  }
                  className="w-full p-3 bg-white/50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-[#9eb0a2] cormorant"
                >
                  <option value="">Sin categoría</option>
                  {Array.from({ length: 22 }, (_, i) => (
                    <option key={i} value={i}>
                      Día {i}
                    </option>
                  ))}
                </select>
              </div>

              {/* BOTONES ACCIÓN */}
              <div className="flex flex-col gap-3 mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#9eb0a2] text-white rounded-full font-bold hover:shadow-lg transition"
                >
                  {loading ? "Procesando..." : "Confirmar Acción"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setModal(null);
                    resetForm();
                  }}
                  className="w-full py-2 text-zinc-400 hover:text-zinc-600 transition text-sm"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Panel;
