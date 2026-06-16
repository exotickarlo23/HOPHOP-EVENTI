import { SITE } from "../lib/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center glass-blue overflow-hidden">
      {/* Dekorativni elementi (zvjezdice i sparkles, kao na napuhanci) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Star className="absolute top-20 left-10 h-8 w-8 text-warning-500 opacity-80 animate-float" />
        <Sparkles className="absolute top-40 right-20 h-6 w-6 text-orange-500 opacity-80 animate-float [animation-delay:1s]" />
        <Star className="absolute bottom-40 left-20 h-10 w-10 text-accent-500 opacity-80 animate-float [animation-delay:2s]" />
        <Sparkles className="absolute top-60 left-1/3 h-4 w-4 text-warning-500 opacity-60 animate-float [animation-delay:0.5s]" />
        <Star className="absolute bottom-60 right-1/3 h-6 w-6 text-orange-500 opacity-60 animate-float [animation-delay:1.5s]" />
        <Sparkles className="absolute top-1/3 right-10 h-8 w-8 text-secondary-500 opacity-70 animate-float [animation-delay:2.5s]" />
      </div>

      <div className="container-x relative z-10 pt-10 pb-24 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            <span className="eyebrow">Dio Hop Hop Eventi</span>
            <h1 className="h1 mt-3">
              Najam <span className="text-primary-500">photo bootha</span> za evente u Zagrebu
            </h1>
            <p className="lead mt-5 max-w-xl mx-auto lg:mx-0">
              360 booth i magic mirror za svadbe, rođendane i korporativne proslave.
              Dostava, postavljanje i operater uključeni. Gosti dobiju fotke i videe
              odmah — vi uspomene i gotov sadržaj za društvene mreže.
            </p>

            {/* Horizontalni bulleti — usklađeno s napuhanci heroom */}
            <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              <Bullet icon={<Truck className="h-5 w-5" />}>Dostava + postavljanje</Bullet>
              <Bullet icon={<Wallet className="h-5 w-5" />}>Operater uključen</Bullet>
              <Bullet icon={<Clock className="h-5 w-5" />}>Brz odgovor u 24h</Bullet>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#ponuda" className="btn-primary text-lg px-8 py-4">
                Zatraži ponudu
              </a>
              <a href="#paketi" className="btn-secondary text-lg px-8 py-4">
                Pogledaj pakete
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 text-sm text-muted-foreground">
              <a
                href={`tel:${SITE.phoneIntl}`}
                className="font-bold text-foreground underline-offset-2 hover:underline"
              >
                {SITE.phone}
              </a>
              <span aria-hidden>·</span>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-foreground hover:underline"
              >
                WhatsApp / Viber
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <HeroMedia />
          </div>
        </div>
      </div>

      {/* Donji val — prijelaz na bijelu pozadinu (isti prijem kao napuhanci) */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-background">
          <path d="M0,60 C300,100 600,20 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

function Bullet({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-foreground">
      <span className="text-primary-500 flex-shrink-0">{icon}</span>
      <span className="font-medium whitespace-nowrap text-sm sm:text-base">{children}</span>
    </div>
  );
}

function HeroMedia() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md sm:max-w-lg animate-hop-bounce">
      <div className="absolute inset-0 rounded-blob bg-gradient-fun shadow-mascot overflow-hidden">
        <div className="absolute inset-3 rounded-[2rem] bg-foreground/90 grid place-items-center">
          <div className="relative">
            <div className="h-44 w-44 sm:h-56 sm:w-56 rounded-full border-[10px] border-dashed border-white/25 animate-spin360" />
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <div className="font-display text-white text-5xl sm:text-6xl font-bold leading-none">
                  360°
                </div>
                <div className="mt-2 text-white/80 text-sm font-semibold tracking-widest uppercase">
                  Photo Booth
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-3 sm:-left-6 bottom-6 rounded-2xl bg-white px-4 py-3 shadow-card animate-floaty">
        <div className="text-xs text-muted-foreground font-semibold">U akciji</div>
        <div className="text-sm font-bold text-foreground">Svadba · Zagreb</div>
      </div>
      <div className="absolute -right-3 sm:-right-6 top-6 rounded-2xl bg-white px-4 py-3 shadow-card animate-floaty [animation-delay:1.5s]">
        <div className="text-xs text-muted-foreground font-semibold">Spremno za</div>
        <div className="text-sm font-bold text-foreground">TikTok & Reels</div>
      </div>
    </div>
  );
}

// Ikone (matching lucide-react style — Star, Sparkles, Truck, Wallet, Clock)
function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61z" />
    </svg>
  );
}
function Sparkles({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3zm7 9l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3zM5 14l.8 2.4L8 17l-2.2.6L5 20l-.8-2.4L2 17l2.2-.6L5 14z" />
    </svg>
  );
}
function Truck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M1 3h15v13H1z" />
      <path d="M16 8h4l3 3v5h-7" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}
function Wallet({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 12V8H4a2 2 0 0 1 0-4h12v4" />
      <path d="M4 6v12a2 2 0 0 0 2 2h14v-4" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
    </svg>
  );
}
function Clock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
