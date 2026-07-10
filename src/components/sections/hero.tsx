"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { whatsappUrl } from "@/lib/site";
import { useIsDesktop } from "@/lib/use-media-query";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isDesktop = useIsDesktop();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax das camadas de imagem
  const yPoster = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yGlass = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-paper grain"
      aria-label="Introdução"
    >
      {/* Fundo. No desktop: brilhos animados com blur (GPU sobra).
          No mobile: gradiente estático leve — sem filtro blur, sem animação,
          para não travar o scroll. */}
      {isDesktop ? (
        <motion.div style={{ scale: scaleBg }} className="absolute inset-0">
          <div className="absolute -right-[10%] top-[-20%] h-[70vh] w-[70vh] rounded-full bg-flame/25 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] h-[60vh] w-[60vh] rounded-full bg-tropical/20 blur-[130px]" />
          <div className="absolute right-[20%] top-[40%] h-[40vh] w-[40vh] rounded-full bg-gold/10 blur-[120px]" />
        </motion.div>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 85% 0%, rgba(193,53,43,0.30), transparent 60%), radial-gradient(120% 70% at 0% 100%, rgba(21,105,59,0.22), transparent 55%)",
          }}
        />
      )}

      {/* Pôster flutuante principal (desktop) */}
      <motion.div
        style={{ y: yPoster, opacity }}
        className="pointer-events-none absolute right-[5%] top-1/2 hidden aspect-[9/16] w-[19rem] -translate-y-1/2 overflow-hidden rounded-[1.4rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.85)] ring-1 ring-paper/10 lg:block xl:w-[22rem]"
      >
        <Image
          src="/images/lovegin-poster.jpg"
          alt="LoveGin — gin com frutas vermelhas e hibisco"
          fill
          priority
          sizes="22rem"
          className="object-cover"
        />
      </motion.div>

      {/* Glass menor sobreposto (desktop) */}
      <motion.div
        style={{ y: yGlass, opacity }}
        className="pointer-events-none absolute right-[27%] top-[56%] hidden aspect-[9/13] w-44 -rotate-3 overflow-hidden rounded-[1.1rem] shadow-[0_40px_70px_-24px_rgba(0,0,0,0.9)] ring-1 ring-paper/15 xl:block"
      >
        <Image
          src="/images/mate-glass.jpg"
          alt="Mate Du'Bigode — rum com mate, maracujá e gengibre"
          fill
          sizes="11rem"
          className="object-cover"
        />
      </motion.div>

      {/* Selo giratório (desktop) */}
      <motion.div
        style={{ opacity }}
        className="pointer-events-none absolute right-[4%] top-[16%] z-20 hidden h-24 w-24 items-center justify-center lg:flex"
      >
        <svg viewBox="0 0 100 100" className="h-full w-full animate-[spin_18s_linear_infinite]">
          <defs>
            <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <text className="fill-paper/70 text-[9.5px] font-semibold uppercase tracking-[0.28em]">
            <textPath href="#circle">
              Feito na hora · Servido com bigode ·
            </textPath>
          </text>
        </svg>
        <span className="absolute font-serif text-2xl italic text-flame">✦</span>
      </motion.div>

      {/* Conteúdo */}
      <div className="shell relative z-10 flex flex-1 flex-col justify-start pb-16 pt-28 lg:justify-center lg:pb-24 lg:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="kicker text-paper/60 before:bg-paper/40"
        >
          Open bar autoral · Eventos premium · desde 2019
        </motion.p>

        <h1 className="mt-7 max-w-[16ch] font-display text-fluid-2xl font-black leading-[0.9] tracking-tightest">
          <Line delay={0.18}>Nós não</Line>
          <Line delay={0.26}>servimos drinks.</Line>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.36 }}
              className="mt-1 block font-serif text-[1.05em] font-light italic text-flame"
            >
              Criamos experiências.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
          className="mt-8 max-w-md text-base leading-relaxed text-paper/70 sm:text-lg"
        >
          Bartenders, coquetéis de assinatura e um bar cenográfico que vira o
          assunto do seu casamento, evento corporativo ou celebração. Do
          welcome drink ao último brinde.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.62 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/orcamento"
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-paper px-8 text-[0.95rem] font-semibold text-ink transition-all duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-flame hover:text-paper"
          >
            Solicitar orçamento
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href={whatsappUrl("Olá! Quero conhecer o open bar da du Bigode.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-paper/25 px-8 text-[0.95rem] font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Conhecer a marca
          </a>
        </motion.div>

        {/* Vitrine visual do herói — só mobile (desktop tem os pôsteres
            flutuantes). Imagem estática: zero custo de scroll. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
          className="relative mt-10 lg:hidden"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-paper/12 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
            <Image
              src="/images/nossos-drinks.jpg"
              alt="Coquetéis autorais Drinks du Bigode em um brinde"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          </div>
          <div className="absolute -bottom-3 left-4 flex items-center gap-2 rounded-full bg-paper px-4 py-2 shadow-lg">
            <span className="text-flame">✦</span>
            <span className="font-display text-xs font-bold tracking-tight text-ink">
              4 drinks de assinatura
            </span>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex items-center justify-between gap-4 pb-7"
      >
        <div className="shell flex w-full items-end justify-between">
          <div className="flex items-center gap-3 text-paper/50">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              Role para descobrir
            </span>
          </div>
          <div className="hidden items-center gap-2 text-paper/40 sm:flex">
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              Rio de Janeiro · Brasil
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Line({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: EASE, delay }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
