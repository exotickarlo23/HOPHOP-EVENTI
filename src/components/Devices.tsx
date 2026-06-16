export function Devices() {
  return (
    <section id="uredjaji" className="section bg-background">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Što nudimo</span>
          <h2 className="h2 mt-3">
            Dva <span className="text-primary-500">bootha</span>, jedna nezaboravna zabava
          </h2>
          <p className="lead mt-4">
            Izaberite uređaj koji najbolje pristaje tipu vašeg eventa — ili kombinirajte oba.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <article className="card p-8 sm:p-10 hover:shadow-playful hover:-translate-y-1 hover:border-primary-200 transition-all duration-300">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                <SpinIcon className="h-7 w-7" />
              </span>
              <h3 className="h3">360 Photo Booth</h3>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Gost stane na platformu, kamera se zavrti oko njega i snimi spektakularan
              usporeni video spreman za Instagram i TikTok. Najtraženiji hit na svadbama
              i partyjima.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <Bullet>Slow-mo videi spremni za društvene mreže</Bullet>
              <Bullet>Profesionalna rasvjeta i zvuk</Bullet>
              <Bullet>Operater na licu mjesta cijelo vrijeme</Bullet>
            </ul>
          </article>

          <article className="card p-8 sm:p-10 hover:shadow-mascot hover:-translate-y-1 hover:border-secondary-200 transition-all duration-300">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-100 text-secondary-600">
                <MirrorIcon className="h-7 w-7" />
              </span>
              <h3 className="h3">Magic Mirror</h3>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Interaktivno ogledalo u punoj veličini: gosti se fotkaju, biraju rekvizite
              i dobiju ispisanu fotku u 10 sekundi. Klasik koji svi vole.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <Bullet>Ispis fotke u 10 sekundi</Bullet>
              <Bullet>Veseli rekviziti i custom okviri</Bullet>
              <Bullet>Knjiga gostiju kao add-on</Bullet>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-foreground">
      <span
        aria-hidden
        className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-500 text-white text-[11px] font-bold"
      >
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function SpinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" strokeDasharray="4 3" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function MirrorIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="5" y="3" width="14" height="18" rx="7" />
      <path d="M9 19h6" />
    </svg>
  );
}
