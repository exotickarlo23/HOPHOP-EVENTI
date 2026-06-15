const STEPS = [
  {
    n: "1",
    title: "Zatražite ponudu",
    body: "Javite nam datum, lokaciju i paket koji vas zanima.",
  },
  {
    n: "2",
    title: "Potvrdimo termin",
    body: "Šaljemo ponudu i rezerviramo vaš datum uz malu akontaciju.",
  },
  {
    n: "3",
    title: "Mi dolazimo i postavljamo",
    body: "Operater stiže ranije, sve posloži i testira. Vi se ne brinete ni oko čega.",
  },
  {
    n: "4",
    title: "Gosti uživaju",
    body: "Neograničeno fotkanje, fotke odmah u ruci, a vi nakon eventa dobijete cijelu digitalnu galeriju.",
  },
];

export function HowItWorks() {
  return (
    <section id="kako" className="section">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Kako funkcionira</span>
          <h2 className="h2 mt-3">Jednostavno do zabave — u 4 koraka</h2>
        </div>
        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s) => (
            <li key={s.n} className="card p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 font-display text-white text-lg font-bold shadow-soft">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
