const AUDIENCES = [
  {
    title: "Svadbe",
    body: "Zabava za goste svih generacija i fotke kakve klasični fotograf ne hvata.",
    emoji: "💍",
  },
  {
    title: "Rođendani i proslave",
    body: "Od 18. do okruglih jubileja — booth digne atmosferu svakog slavlja.",
    emoji: "🎉",
  },
  {
    title: "Korporativni eventi",
    body: "Brendiran booth, lead capture i sadržaj za firmine društvene mreže.",
    emoji: "💼",
  },
  {
    title: "Maturalne",
    body: "Hit večeri za koju ekipa pamti baš te fotke.",
    emoji: "🎓",
  },
];

export function Audiences() {
  return (
    <section id="za-koga" className="section bg-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Za koga</span>
          <h2 className="h2 mt-3">Savršeno za svaki event</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AUDIENCES.map((a) => (
            <article key={a.title} className="card p-6">
              <div aria-hidden className="text-3xl">{a.emoji}</div>
              <h3 className="mt-3 font-display text-lg font-bold text-ink-900">{a.title}</h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">{a.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
