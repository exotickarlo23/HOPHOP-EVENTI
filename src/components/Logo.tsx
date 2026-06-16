type Props = { className?: string; descriptor?: boolean };

export function Logo({ className = "", descriptor = true }: Props) {
  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Hop Hop Photo Booth — početna"
    >
      <span
        aria-hidden
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary text-white font-display text-lg font-bold shadow-playful group-hover:rotate-6 transition"
      >
        HH
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display font-bold text-lg text-foreground">Hop Hop</span>
        {descriptor && (
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary-600">
            Photo Booth
          </span>
        )}
      </span>
    </a>
  );
}
