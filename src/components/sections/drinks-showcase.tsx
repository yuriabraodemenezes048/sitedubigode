"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { drinks } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const accentText: Record<string, string> = {
  flame: "text-flame",
  tropical: "text-tropical",
  gold: "text-gold",
};

export function DrinksShowcase() {
  const [active, setActive] = useState(0);
  const drink = drinks[active];

  return (
    <section id="drinks" className="relative overflow-hidden bg-sand py-24 text-ink grain sm:py-32">
      <div className="shell relative z-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="kicker text-graphite before:bg-graphite/40">
                Coquetéis de assinatura
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-xl font-display text-fluid-xl font-extrabold leading-[0.98] tracking-tightest">
                Receitas autorais,{" "}
                <span className="font-serif font-light italic text-flame">
                  engarrafadas
                </span>{" "}
                à mão.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-graphite">
              Quatro assinaturas que definem a casa — e que podem ganhar o nome
              e a cara do seu evento.
            </p>
          </Reveal>
        </div>

        {/* Desktop: lista + palco */}
        <div className="mt-14 hidden gap-12 lg:grid lg:grid-cols-[1fr_0.9fr]">
          {/* Lista selecionável */}
          <div className="flex flex-col justify-center">
            {drinks.map((d, i) => (
              <button
                key={d.id}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-t border-ink/12 py-6 text-left transition-colors last:border-b",
                  active === i ? "opacity-100" : "opacity-45 hover:opacity-80",
                )}
                aria-pressed={active === i}
              >
                <span className="font-mono text-xs text-stone">
                  0{i + 1}
                </span>
                <span>
                  <span
                    className={cn(
                      "block font-display text-3xl font-extrabold tracking-tightest transition-colors xl:text-4xl",
                      active === i ? accentText[d.accent] : "text-ink",
                    )}
                  >
                    {d.name}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-stone">
                    {d.spirit} · {d.notes}
                  </span>
                </span>
                <motion.span
                  animate={{ opacity: active === i ? 1 : 0, x: active === i ? 0 : -8 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className={cn("text-2xl", accentText[d.accent])}
                >
                  ↗
                </motion.span>
              </button>
            ))}
          </div>

          {/* Palco visual */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-clay ring-1 ring-ink/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={drink.id}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={drink.poster}
                    alt={`${drink.name} — ${drink.notes}`}
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={drink.id + "-desc"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-graphite"
              >
                {drink.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: scroll horizontal de cards */}
        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:hidden">
          {drinks.map((d) => (
            <article
              key={d.id}
              className="w-[78vw] shrink-0 snap-center sm:w-[60vw]"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-ink/10">
                <Image
                  src={d.poster}
                  alt={`${d.name} — ${d.notes}`}
                  fill
                  sizes="78vw"
                  className="object-cover"
                />
              </div>
              <h3
                className={cn(
                  "mt-4 font-display text-2xl font-extrabold tracking-tightest",
                  accentText[d.accent],
                )}
              >
                {d.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-stone">
                {d.spirit} · {d.notes}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-graphite">
                {d.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
