const AUDIENCES = [
  {
    title: "Svadbe",
    body: "Zabava za goste svih generacija i fotke kakve klasični fotograf ne hvata.",
    emoji: "💍",
    bg: "from-primary-100 to-primary-50",
  },
  {
    title: "Rođendani i proslave",
    body: "Od 18. do okruglih jubileja — booth digne atmosferu svakog slavlja.",
    emoji: "🎉",
    bg: "from-secondary-100 to-secondary-50",
  },
  {
    title: "Korporativni eventi",
    body: "Brendiran booth, lead capture i sadržaj za firmine društvene mreže.",
    emoji: "💼",
    bg: "from-accent-100 to-accent-50",
  },
  {
    title: "Maturalne",
    body: "Hit večeri za koju ekipa pamti baš te fotke.",
    emoji: "🎓",
    bg: "from-warning-100 to-warning-50",
  },
];

export function Audiences() {
  return (
    <section id="za-koga" className="section bg-muted">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Za koga</span>
          <h2 className="h2 mt-3">
            Savršeno za <span className="text-secondary-500">svaki event</span>
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AUDIENCES.map((a) => (
            <article
              key={a.title}
              className="card p-6 text-center hover:-translate-y-2 hover:shadow-playful hover:border-primary-200 transition-all duration-300"
            >
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${a.bg} flex items-center justify-center text-4xl`}
                aria-hidden
              >
                {a.emoji}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
