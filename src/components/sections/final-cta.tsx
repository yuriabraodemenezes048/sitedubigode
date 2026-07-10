"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { whatsappUrl } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      aria-label="Pedir orçamento"
      className="bg-gradient-to-b from-sun to-tangerine py-24 sm:py-32"
    >
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-6xl">🍹</span>
          <h2 className="mt-6 font-display text-fluid-2xl font-bold leading-[0.98] text-ink">
            Bora marcar esse rolê?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-xl font-semibold text-ink/80">
            Manda a data e a vibe da festa. Em pouco tempo a gente volta com uma
            proposta com a sua cara.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <Link
              href="/orcamento"
              className="flex h-16 items-center justify-center rounded-full bg-ink px-10 font-display text-xl font-semibold text-paper shadow-[0_10px_0_-3px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              Pedir orçamento
            </Link>
            <a
              href={whatsappUrl("Oi! Quero um orçamento pra minha festa 🍹")}
              className="flex h-16 items-center justify-center rounded-full bg-[#25D366] px-10 font-display text-xl font-semibold text-white shadow-[0_10px_0_-3px_#1a9e4b] transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
