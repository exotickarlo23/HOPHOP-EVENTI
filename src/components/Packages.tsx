import { ADDONS, PACKAGES } from "../data/packages";

export function Packages() {
  return (
    <section id="paketi" className="section bg-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Paketi i cijene</span>
          <h2 className="h2 mt-3">Odaberite svoj paket</h2>
          <p className="lead mt-4">
            Sve cijene uključuju dostavu, postavljanje i operatera. Bez skrivenih troškova.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`relative card p-6 flex flex-col ${
                pkg.featured ? "ring-2 ring-brand-500 shadow-soft" : ""
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white shadow-soft">
                  ⭐ {pkg.badge}
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-ink-900">{pkg.name}</h3>
              <p className="mt-1 text-sm font-semibold text-ink-500">{pkg.duration}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink-700">
                {pkg.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-600 text-[10px] font-bold">✓</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-end justify-between">
                <div className="font-display text-2xl font-bold text-ink-900">
                  {pkg.price}
                </div>
              </div>
              <a
                href={`#ponuda?paket=${pkg.id}`}
                className={`mt-6 ${pkg.featured ? "btn-primary" : "btn-secondary"}`}
              >
                {pkg.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-cream p-6 sm:p-8 ring-1 ring-ink-900/5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-ink-900">Dodajte po želji</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {ADDONS.map((a) => (
                  <li key={a} className="chip bg-white">{a}</li>
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
