"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealText } from "@/components/ui/reveal";
import { whatsappUrl } from "@/lib/site";
import { useIsDesktop } from "@/lib/use-media-query";

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const isDesktop = useIsDesktop();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-clay text-ink grain"
      aria-label="Solicitar orçamento"
    >
      <motion.div
        style={isDesktop ? { y } : undefined}
        className="absolute inset-[-12%]"
      >
        <Image
          src="/images/tropicaipi-poster.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-cream/85" />

      <div className="shell relative z-10 py-24 text-center">
        <p className="kicker mx-auto w-fit text-graphite before:bg-graphite/40 after:hidden">
          O último brinde é com você
        </p>
        <h2 className="mx-auto mt-8 max-w-[14ch] font-display text-fluid-2xl font-black leading-[0.92] tracking-tightest">
          <RevealText text="Seu evento merece mais" /> <br className="hidden sm:block" />
          <span className="font-serif font-light italic text-flame">
            do que bebidas.
          </span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-graphite sm:text-lg">
          Conte pra gente a data e a vibe. Em poucas horas você recebe uma
          proposta sob medida — sem compromisso, com muito capricho.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/orcamento"
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-flame px-9 text-[0.95rem] font-semibold text-paper transition-all duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-olive"
          >
            Solicitar orçamento
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href={whatsappUrl("Olá! Quero um orçamento para o meu evento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-ink/25 px-9 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
