"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { useIsDesktop } from "@/lib/use-media-query";

const timeline = [
  { year: "2019", text: "Nasce a du Bigode, servindo caipirinha autoral em festas de amigos." },
  { year: "2021", text: "Primeiros casamentos e o bar cenográfico que virou marca registrada." },
  { year: "2023", text: "Coquetéis engarrafados: LoveGin, Tropicaipi, Caipi e Mate du Bigode." },
  { year: "Hoje", text: "Mais de 600 eventos e um brinde que ninguém esquece." },
];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="manifesto" className="relative bg-cream py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <p className="kicker">O manifesto</p>
        </Reveal>

        <div className="mt-8 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Coluna de texto */}
          <div>
            <h2 className="font-display text-fluid-xl font-extrabold leading-[0.98] tracking-tightest text-ink">
              <RevealText text="Todo grande evento tem um lugar onde as" />{" "}
              <span className="font-serif font-light italic text-flame">
                melhores histórias
              </span>{" "}
              <RevealText text="acontecem. É no bar." delay={0.1} />
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-graphite/80 sm:text-lg">
              <Reveal delay={0.05}>
                <p>
                  A festa mais linda do mundo pode ser esquecida por causa de uma
                  fila enorme, um drink morno e um copo de plástico. O bar não é
                  detalhe — é onde as pessoas se encontram, brindam e criam
                  memória.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  A <strong className="font-semibold text-ink">du Bigode</strong>{" "}
                  nasceu para virar esse jogo. Tratamos cada coquetel como
                  assinatura, cada balcão como cenário e cada convidado como
                  protagonista. O resultado é aquele bar que todo mundo
                  fotografa — e do qual ninguém quer sair.
                </p>
              </Reveal>
            </div>

            {/* Linha do tempo */}
            <ol className="mt-12 space-y-0">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.06}>
                  <li className="group grid grid-cols-[auto_1fr] items-start gap-6 border-t border-ink/10 py-5 transition-colors last:border-b hover:bg-ink/[0.02]">
                    <span className="font-display text-lg font-extrabold tracking-tight text-flame">
                      {item.year}
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-graphite/80">
                      {item.text}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Coluna de imagem com parallax */}
          <div ref={ref} className="relative">
            <div className="sticky top-28 overflow-hidden rounded-3xl">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-sand ring-1 ring-ink/5">
                <motion.div
                  style={isDesktop ? { y } : undefined}
                  className="absolute inset-[-8%]"
                >
                  <Image
                    src="/images/caipi-glass.jpg"
                    alt="Caipi Du'Bigode — cachaça artesanal com abacaxi e manjericão"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
              {/* Citação sobreposta */}
              <div className="glass absolute -bottom-5 left-4 right-4 rounded-2xl border border-ink/5 p-5 shadow-xl sm:left-6 sm:right-6">
                <p className="font-serif text-lg italic leading-snug text-ink">
                  “Se o bar não for inesquecível, a gente não montou.”
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone">
                  — O Bigode
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
