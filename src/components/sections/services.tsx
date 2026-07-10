"use client";

import { services } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Services() {
  return (
    <section id="servicos" className="bg-paper py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="kicker">O que fazemos</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-2xl font-display text-fluid-xl font-extrabold leading-[0.98] tracking-tightest text-ink">
                Um bar sob medida para{" "}
                <span className="font-serif font-light italic text-flame">
                  cada ocasião
                </span>
                .
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/orcamento"
              className="link-underline text-sm font-semibold text-ink"
            >
              Montar meu orçamento →
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.id}>
              <article className="group relative flex h-full flex-col bg-paper p-8 transition-colors duration-500 hover:bg-olive hover:text-cream sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-stone transition-colors group-hover:text-cream/60">
                    {s.index}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-stone opacity-0 transition-all duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream group-hover:opacity-100" />
                </div>

                <h3 className="mt-10 font-display text-2xl font-extrabold tracking-tightest text-ink transition-colors group-hover:text-cream sm:text-[1.7rem]">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-graphite/75 transition-colors group-hover:text-cream/80">
                  {s.summary}
                </p>

                <ul className="mt-6 space-y-2 border-t border-ink/10 pt-5 transition-colors group-hover:border-cream/20">
                  {s.includes.map((inc) => (
                    <li
                      key={inc}
                      className="flex items-center gap-2.5 text-[0.82rem] text-graphite/80 transition-colors group-hover:text-cream/85"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-flame" strokeWidth={3} />
                      {inc}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
