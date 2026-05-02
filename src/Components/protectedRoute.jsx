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

        
        if (rol === "admin") {
          setAllowed(true);
          return;
        }

        
        if (tipo && rol === tipo.toLowerCase()) {
          setAllowed(true);
          return;
        }

        
        setAllowed(false);
      } catch (err) {
        console.error("ProtectedRoute error:", err);
        setAllowed(false);
      }
    };

    verify();
  }, [tipo]);

  
  if (allowed === null) return <p>Cargando...</p>;

  if (!allowed) return <Navigate to="/acceder" replace />;

 
  return children;
}

export default ProtectedRoute;
