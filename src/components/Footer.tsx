import { SITE } from "../lib/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-white font-display text-lg font-bold shadow-playful"
            >
              HH
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg">Hop Hop</span>
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary-300">
                Photo Booth
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md">
            Dio <span className="font-bold text-white">Hop Hop Eventi</span> obitelji.
            Najam 360 bootha i magic mirrora za svadbe, rođendane i korporativne evente u Zagrebu.
          </p>
          <a
            href={SITE.napuhanciUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/20 transition"
          >
            Tražite napuhance za dječji rođendan? Posjetite Hop Hop Napuhance →
          </a>

          {/* Brand-coloured social ikone (matching napuhanci footer) */}
          <div className="mt-6 flex items-center gap-3">
            <a
              aria-label="TikTok"
              href={SITE.tiktok}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-500 hover:bg-accent-400 transition shadow-playful"
            >
              <TikTokIcon className="h-5 w-5 text-white" />
            </a>
            <a
              aria-label="Instagram"
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary-500 hover:bg-secondary-400 transition shadow-mascot"
            >
              <IgIcon className="h-5 w-5 text-white" />
            </a>
            <a
              aria-label="WhatsApp"
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] hover:brightness-110 transition"
            >
              <WaIcon className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-bold uppercase tracking-widest text-white/90">
            Brzi linkovi
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="text-white/70 hover:text-white transition" href="#top">Početna</a></li>
            <li><a className="text-white/70 hover:text-white transition" href="#uredjaji">Booth</a></li>
            <li><a className="text-white/70 hover:text-white transition" href="#paketi">Paketi</a></li>
            <li><a className="text-white/70 hover:text-white transition" href="#galerija">Galerija</a></li>
            <li><a className="text-white/70 hover:text-white transition" href="#faq">FAQ</a></li>
            <li><a className="text-white/70 hover:text-white transition" href="#ponuda">Rezervacija</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-bold uppercase tracking-widest text-white/90">
            Kontakt
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-primary-300 flex-none" />
              <a className="text-white/80 hover:text-white transition" href={`tel:${SITE.phoneIntl}`}>
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 text-primary-300 flex-none" />
              <a className="text-white/80 hover:text-white transition" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <PinIcon className="h-4 w-4 text-primary-300 mt-0.5 flex-none" />
              <span className="text-white/80">{SITE.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <span>© {new Date().getFullYear()} {SITE.parent}. Sva prava pridržana.</span>
          <span>Made with ♥ in Zagreb</span>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
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
