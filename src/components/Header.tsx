import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { SITE } from "../lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition ${
        scrolled
          ? "bg-cream/85 backdrop-blur shadow-[0_1px_0_0_rgba(26,17,48,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-2">
          <a className="btn-ghost" href={`tel:${SITE.phoneIntl}`} aria-label={`Nazovi ${SITE.phone}`}>
            <PhoneIcon className="h-4 w-4" />
            {SITE.phone}
          </a>
          <a className="btn-primary" href="#ponuda">
            Zatraži ponudu
          </a>
        </nav>
      </div>
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
