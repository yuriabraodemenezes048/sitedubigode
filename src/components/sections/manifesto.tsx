"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const perks = [
  { emoji: "🍹", text: "Drinks autorais com a cara da sua festa" },
  { emoji: "⚡", text: "Fila que anda rápido, copo sempre cheio" },
  { emoji: "📸", text: "Aquele visual que rende story a noite toda" },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-paper py-20 sm:py-28">
      <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="pill bg-lime/20 text-lime">quem é o bigode?</span>
          <h2 className="mt-5 font-display text-fluid-xl font-bold leading-[1.05] text-ink">
            A firma que deixa a festa{" "}
            <span className="text-tangerine">boa de verdade.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite">
            Bar chato com fila enorme e drink morno não combina com a gente. A
            du Bigode nasceu no Rio pra fazer o contrário: bebida caprichada,
            equipe animada e uma energia que contagia todo mundo. 🌴
          </p>

          <ul className="mt-7 space-y-3">
            {perks.map((p) => (
              <li key={p.text} className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3">
                <span className="text-2xl">{p.emoji}</span>
                <span className="font-display font-semibold text-ink">{p.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border-[5px] border-ink bg-sand shadow-card sm:rounded-[2.5rem]">
              <Image
                src="/images/caipi-glass.jpg"
                alt="Caipi Du'Bigode: cachaça, abacaxi, limão e manjericão"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <span className="absolute -bottom-4 -left-4 -rotate-6 rounded-full bg-sun px-5 py-2.5 font-display text-base font-bold text-ink shadow-lg">
              desde 2019 🎉
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
