"use client";

import { testimonials } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Star } from "lucide-react";

const avatarColors = ["bg-tangerine", "bg-lime", "bg-sky", "bg-berry"];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cream py-20 sm:py-28">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="pill bg-sun text-ink">nota 4,9 ⭐</span>
          <h2 className="mt-5 font-display text-fluid-xl font-bold leading-[1.05] text-ink">
            A galera aprovou 🙌
          </h2>
          <p className="mt-4 text-lg text-graphite">Quem contratou, virou fã (e a gente ama isso).</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <StaggerItem key={t.author}>
              <figure className="flex h-full flex-col rounded-[1.75rem] border-2 border-ink/10 bg-paper p-7">
                <div className="mb-4 flex gap-0.5">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="h-5 w-5 fill-sun text-sun" />
                  ))}
                </div>
                <blockquote className="flex-1 text-lg leading-relaxed text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full font-display text-lg font-bold text-paper ${avatarColors[i % avatarColors.length]}`}
                  >
                    {t.author.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-display font-bold text-ink">{t.author}</span>
                    <span className="block text-sm text-stone">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
