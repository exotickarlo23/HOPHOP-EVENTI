import { SITE } from "../lib/site";

export function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-ink-900/10 bg-white/95 backdrop-blur"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          className="btn-secondary justify-center"
          href={`tel:${SITE.phoneIntl}`}
          aria-label="Nazovi"
        >
          <PhoneIcon className="h-4 w-4" /> Nazovi
        </a>
        <a className="btn-primary justify-center" href="#ponuda">
          Zatraži ponudu
        </a>
      </div>
    </div>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
