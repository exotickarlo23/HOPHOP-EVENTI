const STEPS = [
  {
    n: "1",
    title: "Zatražite ponudu",
    body: "Javite nam datum, lokaciju i paket koji vas zanima.",
    color: "primary",
  },
  {
    n: "2",
    title: "Potvrdimo termin",
    body: "Šaljemo ponudu i rezerviramo vaš datum uz malu akontaciju.",
    color: "secondary",
  },
  {
    n: "3",
    title: "Mi dolazimo i postavljamo",
    body: "Operater stiže ranije, sve posloži i testira. Vi se ne brinete ni oko čega.",
    color: "warning",
  },
  {
    n: "4",
    title: "Gosti uživaju",
    body: "Neograničeno fotkanje, fotke odmah u ruci, a vi nakon eventa dobijete cijelu digitalnu galeriju.",
    color: "accent",
  },
] as const;

const COLOR_MAP: Record<string, string> = {
  primary: "bg-primary-500 shadow-playful",
  secondary: "bg-secondary-500 shadow-mascot",
  warning: "bg-warning-500 shadow-playful",
  accent: "bg-accent-500 shadow-playful",
};

export function HowItWorks() {
  return (
    <section id="kako" className="section bg-background">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Kako funkcionira</span>
          <h2 className="h2 mt-3">
            Jednostavno do zabave — u <span className="text-primary-500">4 koraka</span>
          </h2>
        </div>
        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="card p-6 hover:-translate-y-1 hover:shadow-playful hover:border-primary-200 transition-all duration-300"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-white font-display text-xl font-bold ${COLOR_MAP[s.color]}`}
              >
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
