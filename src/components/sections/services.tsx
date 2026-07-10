"use client";

import Link from "next/link";
import { services } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const bg: Record<string, string> = {
  sky: "bg-sky",
  lime: "bg-lime",
  tangerine: "bg-tangerine",
  grape: "bg-grape",
  sun: "bg-sun",
  berry: "bg-berry",
};

export function Services() {
  return (
    <section id="servicos" className="bg-cream py-20 sm:py-28">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="pill bg-sky/20 text-sky">o que a gente faz</span>
          <h2 className="mt-5 font-display text-fluid-xl font-bold leading-[1.05] text-ink">
            Tem festa? A gente tem o bar. 🎉
          </h2>
          <p className="mt-4 text-lg text-graphite">
            Seja qual for o rolê, a bebida fica com a gente.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const light = s.color === "sun";
            return (
              <StaggerItem key={s.id}>
                <div
                  className={cn(
                    "flex h-full flex-col rounded-[1.75rem] p-7 transition-transform duration-200 ease-pop hover:-translate-y-1",
                    bg[s.color],
                    light ? "text-ink" : "text-paper",
                  )}
                >
                  <span className="text-5xl">{s.emoji}</span>
                  <h3 className="mt-5 font-display text-2xl font-bold">{s.title}</h3>
                  <p
                    className={cn(
                      "mt-2 text-[0.98rem] leading-relaxed",
                      light ? "text-ink/75" : "text-paper/85",
                    )}
                  >
                    {s.summary}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-10 text-center">
          <Link
            href="/orcamento"
            className="inline-flex h-14 items-center justify-center rounded-full bg-ink px-8 font-display text-lg font-semibold text-paper transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            Quero um orçamento
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
