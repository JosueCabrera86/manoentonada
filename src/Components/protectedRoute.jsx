import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./client/supabaseClient";

function ProtectedRoute({ children, tipo }) {
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    const verify = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const session = sessionData?.session;

      if (!session) {
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

      if (tipo && rol === tipo) {
        setAllowed(true);
        return;
      }

      setAllowed(false);
    };

    verify();
  }, [tipo]);

  if (allowed === null) return null;

  if (!allowed) return <Navigate to="/acceder" replace />;

  return children;
}

export default ProtectedRoute;
