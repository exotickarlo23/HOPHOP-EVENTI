// [UREDI: zamijeni placeholder kartice s pravim TikTok/Reels embedovima ili video tagovima]
const CLIPS = Array.from({ length: 9 }, (_, i) => ({ id: i, hue: 196 + i * 20 }));

export function Gallery() {
  return (
    <section id="galerija" className="section bg-background">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Galerija</span>
          <h2 className="h2 mt-3">
            Pogledajte kako to <span className="text-primary-500">izgleda</span>
          </h2>
          <p className="lead mt-4">
            Pravi clipovi s evenata — svadbe, rođendani, korporativne proslave.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {CLIPS.map((c) => (
            <figure
              key={c.id}
              className="relative aspect-[9/16] overflow-hidden rounded-2xl ring-1 ring-black/5 hover:-translate-y-1 hover:shadow-playful transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, hsl(${c.hue} 80% 55%), hsl(${(c.hue + 40) % 360} 80% 50%))`,
              }}
              aria-label={`Placeholder clip ${c.id + 1}`}
            >
              <div className="absolute inset-0 grid place-items-center text-white/90">
                <PlayIcon className="h-12 w-12 drop-shadow" />
              </div>
              <figcaption className="absolute left-3 bottom-3 rounded-full bg-black/40 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-white">
                Reel · 0:{(15 + c.id).toString().padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
