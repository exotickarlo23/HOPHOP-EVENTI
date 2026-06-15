import { SITE } from "../lib/site";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-cream">
      <div className="container-x py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span aria-hidden className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-white font-display text-lg font-bold">HH</span>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg">Hop Hop</span>
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-brand-300">Photo Booth</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-cream/70 leading-relaxed">
            Dio <span className="font-bold text-cream">Hop Hop Eventi</span> obitelji.
            Najam photo bootha za svadbe, rođendane i korporativne evente u Zagrebu.
          </p>
          <a
            href={SITE.napuhanciUrl}
            className="mt-4 inline-flex items-center gap-1 rounded-full bg-cream/10 px-3 py-1.5 text-sm font-semibold text-cream hover:bg-cream/20 transition"
          >
            Tražite napuhance za dječji rođendan? Posjetite Hop Hop Napuhance →
          </a>
        </div>

        <div>
          <h4 className="font-display text-base font-bold uppercase tracking-widest text-cream/80">Kontakt</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:underline" href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a>
            </li>
            <li>
              <a className="hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li className="text-cream/70">{SITE.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-bold uppercase tracking-widest text-cream/80">Pratite nas</h4>
          <div className="mt-4 flex items-center gap-3">
            <a aria-label="TikTok" href={SITE.tiktok} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 hover:bg-cream/20 transition">
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a aria-label="Instagram" href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 hover:bg-cream/20 transition">
              <IgIcon className="h-5 w-5" />
            </a>
            <a aria-label="WhatsApp" href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white hover:brightness-110 transition">
              <WaIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <span>© {new Date().getFullYear()} {SITE.parent}. Sva prava pridržana.</span>
          <span>Made with ♥ in Zagreb</span>
        </div>
      </div>
    </footer>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21 8.55a7.49 7.49 0 0 1-4.38-1.4v7.86a6.49 6.49 0 1 1-5.61-6.43v2.59a3.92 3.92 0 1 0 3.02 3.81V2h2.59A4.94 4.94 0 0 0 21 5.96v2.59Z" />
    </svg>
  );
}
function IgIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
function WaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.05 0C5.5 0 .15 5.34.15 11.89c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.42-8.42Z" />
    </svg>
  );
}
