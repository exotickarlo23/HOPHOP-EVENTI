type Props = { className?: string; descriptor?: boolean };

// [UREDI: zamijeni s pravim Hop Hop logo assetom kad bude dostupan]
export function Logo({ className = "", descriptor = true }: Props) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-2 ${className}`} aria-label="Hop Hop Photo Booth — početna">
      <span
        aria-hidden
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-white font-display text-lg shadow-soft group-hover:rotate-6 transition"
      >
        HH
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display font-bold text-lg text-ink-900">
          Hop Hop
        </span>
        {descriptor && (
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-brand-600">
            Photo Booth
          </span>
        )}
      </span>
    </a>
  );
}
