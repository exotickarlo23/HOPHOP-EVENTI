import { SITE } from "../lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob absolute -top-20 -left-16 h-72 w-72 rounded-full bg-brand-300" />
        <div className="blob absolute -top-10 right-0 h-80 w-80 rounded-full bg-sun-400" />
        <div className="blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-400" />
      </div>

      <div className="container-x pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="eyebrow">Dio Hop Hop Eventi</span>
            <h1 className="h1 mt-3">
              Najam photo bootha za <span className="text-brand-500">evente</span> u Zagrebu
            </h1>
            <p className="lead mt-5 max-w-xl">
              360 booth i magic mirror za svadbe, rođendane i korporativne proslave.
              Dostava, postavljanje i operater uključeni. Gosti dobiju fotke i videe
              na licu mjesta — vi dobijete uspomene i gotov sadržaj za društvene mreže.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn-primary" href="#ponuda">Zatraži ponudu</a>
              <a className="btn-secondary" href="#paketi">Pogledaj pakete</a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              <li className="chip"><Dot /> Brz odgovor u 24h</li>
              <li className="chip"><Dot /> Dostava po Zagrebu</li>
              <li className="chip"><Dot /> Operater uvijek uključen</li>
              <li className="chip"><Dot /> 500+ odrađenih evenata{/* [UREDI] */}</li>
            </ul>

            <div className="mt-6 flex items-center gap-3 text-sm text-ink-500">
              <a href={`tel:${SITE.phoneIntl}`} className="font-bold text-ink-700 underline-offset-2 hover:underline">
                {SITE.phone}
              </a>
              <span aria-hidden>·</span>
              <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="font-semibold text-ink-700 hover:underline">
                WhatsApp / Viber
              </a>
            </div>
          </div>

          <div className="relative">
            <HeroMedia />
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span aria-hidden className="h-2 w-2 rounded-full bg-brand-500" />;
}

function HeroMedia() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md sm:max-w-lg">
      {/* placeholder okvir bootha — kasnije zamijeni s <video> loop-om */}
      <div className="absolute inset-0 rounded-blob bg-gradient-to-br from-brand-500 via-brand-400 to-sun-400 shadow-card overflow-hidden">
        <div className="absolute inset-3 rounded-[2rem] bg-ink-900/85 grid place-items-center">
          <div className="relative">
            <div className="h-44 w-44 sm:h-56 sm:w-56 rounded-full border-[10px] border-dashed border-white/20 animate-spin360" />
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <div className="font-display text-white text-5xl sm:text-6xl font-bold leading-none">360°</div>
                <div className="mt-2 text-white/70 text-sm font-semibold tracking-widest uppercase">
                  Photo Booth
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -left-3 sm:-left-6 bottom-6 rounded-2xl bg-white px-4 py-3 shadow-card animate-floaty">
        <div className="text-xs text-ink-500 font-semibold">U akciji</div>
        <div className="text-sm font-bold text-ink-900">Svadba · Zagreb</div>
      </div>
      <div className="absolute -right-3 sm:-right-6 top-6 rounded-2xl bg-white px-4 py-3 shadow-card animate-floaty [animation-delay:1.5s]">
        <div className="text-xs text-ink-500 font-semibold">Spremno za</div>
        <div className="text-sm font-bold text-ink-900">TikTok & Reels</div>
      </div>
      {/* [UREDI: zamijeni cijeli HeroMedia s pravim <video autoplay muted loop playsinline poster="/hero-poster.jpg" src="/hero.mp4" /> */}
    </div>
  );
}
