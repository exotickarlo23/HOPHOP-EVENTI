import { useState } from "react";
import { FAQ } from "../data/faq";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section bg-muted">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">FAQ</span>
          <h2 className="h2 mt-3">
            Česta <span className="text-primary-500">pitanja</span>
          </h2>
          <p className="lead mt-4">
            Odgovori na najčešće upite o najmu photo bootha.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="bg-white border-2 border-border rounded-2xl shadow-card hover:shadow-playful hover:border-primary-200 transition-all duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-5 text-left hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary-500 text-white text-lg transition ${
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
                    <p className="px-6 sm:px-8 pb-6 text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
