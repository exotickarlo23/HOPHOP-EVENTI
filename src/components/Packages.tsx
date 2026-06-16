import { ADDONS, PACKAGES } from "../data/packages";

export function Packages() {
  return (
    <section id="paketi" className="section bg-muted">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Paketi i cijene</span>
          <h2 className="h2 mt-3">
            Odaberite svoj <span className="text-secondary-500">paket</span>
          </h2>
          <p className="lead mt-4">
            Sve cijene uključuju dostavu, postavljanje i operatera. Bez skrivenih troškova.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`relative card p-6 flex flex-col hover:-translate-y-1 transition-all duration-300 ${
                pkg.featured
                  ? "ring-2 ring-primary-500 shadow-playful hover:shadow-mascot"
                  : "hover:shadow-playful hover:border-primary-200"
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-warning-500 px-3 py-1 text-xs font-bold text-warning-foreground shadow-playful">
                  ⭐ {pkg.badge}
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-foreground">{pkg.name}</h3>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">{pkg.duration}</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground">
                {pkg.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary-100 text-primary-600 text-[11px] font-bold">
                      ✓
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-end justify-between">
                <div className="font-display text-3xl font-bold text-primary-600">{pkg.price}</div>
              </div>
              <a
                href={`#ponuda?paket=${pkg.id}`}
                className={`mt-6 ${pkg.featured ? "btn-primary" : "btn-secondary"} justify-center`}
              >
                {pkg.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-white p-6 sm:p-8 shadow-card ring-1 ring-black/5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">Dodajte po želji</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {ADDONS.map((a) => (
                  <li
                    key={a}
                    className="inline-block bg-primary-50 text-primary-700 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <a className="btn-primary whitespace-nowrap" href="#ponuda">
              Zatraži ponudu za svoj termin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
