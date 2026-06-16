import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { SITE } from "../lib/site";

const NAV_LINKS = [
  { href: "#top", label: "Početna" },
  { href: "#uredjaji", label: "Booth" },
  { href: "#paketi", label: "Paketi" },
  { href: "#galerija", label: "Galerija" },
  { href: "#ponuda", label: "Rezervacija" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-border"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-foreground hover:text-primary-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneIntl}`}
            className="hidden lg:inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary-600 transition"
            aria-label={`Nazovi ${SITE.phone}`}
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phone}
          </a>
          <a className="hidden md:inline-flex btn-gradient" href="#ponuda">
            Rezerviraj
          </a>
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary-50 transition"
            aria-label="Otvori izbornik"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container-x py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-1 text-base font-semibold text-foreground hover:text-primary-600 transition"
              >
                {l.label}
              </a>
            ))}
            <div className="border-t border-border pt-4 mt-1 flex flex-col gap-3">
              <a
                href={`tel:${SITE.phoneIntl}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground"
                onClick={() => setMobileOpen(false)}
              >
                <PhoneIcon className="h-4 w-4" /> {SITE.phone}
              </a>
              <a
                href="#ponuda"
                onClick={() => setMobileOpen(false)}
                className="btn-gradient justify-center"
              >
                Rezerviraj
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
    </svg>
  );
}
