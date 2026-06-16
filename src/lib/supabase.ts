import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let client: SupabaseClient | null = null;

// Lazy init: ne padaj pri uvozu modula ako env vars nisu postavljene
// (sprječava blank screen na deployu kad fali konfiguracija).
function getClient(): SupabaseClient {
  if (client) return client;
  if (!url || !key) {
    throw new Error(
      "Supabase nije konfiguriran: postavite VITE_SUPABASE_URL i VITE_SUPABASE_ANON_KEY env varijable."
    );
  }
  client = createClient(url, key, { auth: { persistSession: false } });
  return client;
}

export const supabase = {
  from(table: string) {
    return getClient().from(table);
  },
};

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
