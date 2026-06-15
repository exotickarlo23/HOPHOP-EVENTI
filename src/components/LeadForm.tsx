import { useState } from "react";
import { supabase, type PhotoBoothLead } from "../lib/supabase";
import { trackLead } from "../lib/analytics";
import { SITE } from "../lib/site";

const EVENT_TYPES = ["Svadba", "Rođendan", "Korporativni", "Maturalna", "Drugo"];
const PACKAGES = ["Basic", "Standard", "Premium", "Korporativni", "Nisam siguran"];

type State = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<keyof PhotoBoothLead, string>>;

const PHONE_RE = /^[+0-9 ()\-./]{6,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LeadForm() {
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState<PhotoBoothLead>({
    name: "",
    phone: "",
    email: "",
    event_date: "",
    event_type: "",
    location: "",
    package: "",
    message: "",
  });

  function set<K extends keyof PhotoBoothLead>(k: K, v: PhotoBoothLead[K]) {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name?.trim()) e.name = "Unesite ime i prezime.";
    if (!form.phone?.trim()) e.phone = "Unesite broj telefona.";
    else if (!PHONE_RE.test(form.phone)) e.phone = "Provjerite format broja.";
    if (!form.email?.trim()) e.email = "Unesite email.";
    else if (!EMAIL_RE.test(form.email)) e.email = "Provjerite format emaila.";
    return e;
  }

  async function onSubmit() {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setState("submitting");
    const payload: PhotoBoothLead = {
      ...form,
      event_date: form.event_date || null,
      event_type: form.event_type || null,
      location: form.location || null,
      package: form.package || null,
      message: form.message || null,
    };
    const { error } = await supabase.from("photobooth_leads").insert(payload);
    if (error) {
      console.error(error);
      setState("error");
      return;
    }
    trackLead();
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="card p-8 sm:p-10 text-center">
        <div aria-hidden className="text-5xl">🎉</div>
        <h3 className="mt-4 font-display text-2xl font-bold text-ink-900">Hvala!</h3>
        <p className="mt-2 text-ink-700">
          Javljamo se s ponudom najkasnije u roku 24h.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a className="btn-primary" href={`tel:${SITE.phoneIntl}`}>
            Nazovi nas odmah
          </a>
          <a className="btn-secondary" href={SITE.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp / Viber
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="card p-6 sm:p-8"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Ime i prezime" error={errors.name} required>
          <input
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputClass(errors.name)}
            placeholder="Ana Anić"
          />
        </Field>
        <Field label="Telefon" error={errors.phone} required>
          <input
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={inputClass(errors.phone)}
            placeholder="091 234 5678"
          />
        </Field>
        <Field label="Email" error={errors.email} required className="sm:col-span-2">
          <input
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            className={inputClass(errors.email)}
            placeholder="ana@primjer.hr"
          />
        </Field>

        <Field label="Datum eventa">
          <input
            type="date"
            value={form.event_date ?? ""}
            onChange={(e) => set("event_date", e.target.value)}
            className={inputClass()}
          />
        </Field>
        <Field label="Tip eventa">
          <select
            value={form.event_type ?? ""}
            onChange={(e) => set("event_type", e.target.value)}
            className={inputClass()}
          >
            <option value="">Odaberi…</option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>

        <Field label="Lokacija / mjesto">
          <input
            type="text"
            value={form.location ?? ""}
            onChange={(e) => set("location", e.target.value)}
            className={inputClass()}
            placeholder="Zagreb, Hotel …"
          />
        </Field>
        <Field label="Paket koji zanima">
          <select
            value={form.package ?? ""}
            onChange={(e) => set("package", e.target.value)}
            className={inputClass()}
          >
            <option value="">Odaberi…</option>
            {PACKAGES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </Field>

        <Field label="Poruka (opcionalno)" className="sm:col-span-2">
          <textarea
            value={form.message ?? ""}
            onChange={(e) => set("message", e.target.value)}
            rows={4}
            className={inputClass()}
            placeholder="Recite nam išta dodatno o eventu…"
          />
        </Field>
      </div>

      {state === "error" && (
        <p role="alert" className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200">
          Slanje nije uspjelo. Pokušajte ponovno ili nas nazovite na {SITE.phone}.
        </p>
      )}

      <button
        type="submit"
        className="mt-6 btn-primary w-full text-lg"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Šaljem…" : "Zatraži ponudu"}
      </button>
      <p className="mt-3 text-xs text-ink-500 text-center">
        Slanjem prihvaćate da vas kontaktiramo s ponudom. Bez spama.
      </p>
    </form>
  );
}

function Field({
  label,
  children,
  error,
  required,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-ink-700">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs font-semibold text-red-600">{error}</span>}
    </label>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-2xl border-2 px-4 py-3 text-base text-ink-900 bg-white placeholder:text-ink-400 transition focus:outline-none focus:ring-4 ${
    error
      ? "border-red-300 focus:ring-red-100"
      : "border-ink-900/10 focus:border-brand-400 focus:ring-brand-100"
  }`;
}
