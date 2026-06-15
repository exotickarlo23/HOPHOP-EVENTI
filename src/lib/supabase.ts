import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(url, key, {
  auth: { persistSession: false },
});

export type PhotoBoothLead = {
  name: string;
  phone: string;
  email: string;
  event_date: string | null;
  event_type: string | null;
  location: string | null;
  package: string | null;
  message: string | null;
};
