import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Javni Supabase project URL i publishable anon key — namjerno hardkodirani
// kao fallback da deploy radi i bez env vars (anon key je dizajniran da bude javan;
// pristup je ograničen RLS politikama). VITE_* env vars i dalje override-aju.
const FALLBACK_URL = "https://egwtrsfcobwybcnbqsok.supabase.co";
const FALLBACK_KEY = "sb_publishable_vNzkPSikbc9v5lAkpl8BOQ_QjjXn-wc";

const url = import.meta.env.VITE_SUPABASE_URL || FALLBACK_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY || FALLBACK_KEY;

let client: SupabaseClient | null = null;
export function getSupabase(): SupabaseClient {
  if (!client) {
    client = createClient(url, key, { auth: { persistSession: false } });
  }
  return client;
}

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
