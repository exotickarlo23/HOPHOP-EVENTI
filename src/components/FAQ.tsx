import { useState } from "react";
import { FAQ } from "../data/faq";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section bg-white">
      <div className="container-x max-w-3xl">
        <span className="eyebrow">FAQ</span>
        <h2 className="h2 mt-3">Česta pitanja</h2>

        <ul className="mt-10 divide-y divide-ink-900/10 rounded-3xl ring-1 ring-ink-900/10 bg-cream/40 overflow-hidden">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left hover:bg-cream/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-ink-900">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-500 text-white transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-ink-700 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
