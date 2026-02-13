import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lomcpguzggxldxyciyuy.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvbWNwZ3V6Z2d4bGR4eWNpeXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MzAyMzAsImV4cCI6MjA4NjQwNjIzMH0.GXnTy29-ytYNQjxn-EK-F9w8eu10hEXevRZ6wKNZWMc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: sessionStorage,
    persistSession: true,
  },
});
