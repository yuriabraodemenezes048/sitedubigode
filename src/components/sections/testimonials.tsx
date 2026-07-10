"use client";

import { testimonials } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-paper py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="kicker">Quem brindou, aprovou</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-2xl font-display text-fluid-xl font-extrabold leading-[0.98] tracking-tightest text-ink">
                Histórias que{" "}
                <span className="font-serif font-light italic text-flame">
                  continuam sendo contadas
                </span>{" "}
                depois da festa.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 rounded-full border border-ink/10 bg-cream px-5 py-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm font-semibold text-ink">4,9 no Google</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={(i % 2) * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(17,17,16,0.35)] sm:p-10">
                <div className="mb-5 flex">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="flex-1 font-serif text-xl leading-snug text-ink sm:text-2xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-flame font-display text-sm font-bold text-paper">
                    {t.author.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{t.author}</span>
                    <span className="block text-sm text-stone">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
