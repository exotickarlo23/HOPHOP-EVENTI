export function Devices() {
  return (
    <section id="uredjaji" className="section">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Što nudimo</span>
          <h2 className="h2 mt-3">Dva bootha, jedna nezaboravna zabava</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <article className="card p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                <SpinIcon className="h-6 w-6" />
              </span>
              <h3 className="h3">360 Photo Booth</h3>
            </div>
            <p className="mt-4 text-ink-700 leading-relaxed">
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

          <article className="card p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sun-400/30 text-sun-600">
                <MirrorIcon className="h-6 w-6" />
              </span>
              <h3 className="h3">Magic Mirror</h3>
            </div>
            <p className="mt-4 text-ink-700 leading-relaxed">
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
    <li className="flex items-start gap-2 text-ink-700">
      <span aria-hidden className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-brand-500 text-white text-[10px] font-bold">✓</span>
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
