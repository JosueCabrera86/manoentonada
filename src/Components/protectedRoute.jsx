import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./client/supabaseClient";

function ProtectedRoute({ children, tipo }) {
  const [allowed, setAllowed] = useState(null); // null = verificando

  useEffect(() => {
    const verify = async () => {
      try {
        const { data: sessionData, error: sessionError } =
          await supabase.auth.getSession();
        const session = sessionData?.session;

        if (!session || sessionError) {
          setAllowed(false);
          return;
        }

        const email = session.user.email;

        // Traemos rol del usuario
        const { data: userRow, error } = await supabase
          .from("users")
          .select("rol")
          .eq("email", email)
          .single();

        if (error || !userRow) {
          setAllowed(false);
          return;
        }

        const rol = (userRow.rol || "").trim().toLowerCase();

        console.log("DEBUG ProtectedRoute:", { rol });

        // Siempre permitir admin
        if (rol === "admin") {
          setAllowed(true);
          return;
        }

        // Verificar rol para tipo
        if (tipo && rol === tipo.toLowerCase()) {
          setAllowed(true);
          return;
        }

        // Si no cumple nada, denegar
        setAllowed(false);
      } catch (err) {
        console.error("ProtectedRoute error:", err);
        setAllowed(false);
      }
    };

    verify();
  }, [tipo]);

  // Mientras verificamos la sesión
  if (allowed === null) return <p>Cargando...</p>;

  // Si no tiene permiso → redirigir a login o landing
  if (!allowed) return <Navigate to="/acceder" replace />;

  // Si todo ok → renderiza children
  return children;
}

export default ProtectedRoute;
