"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Play } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

const fade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-28 sm:pt-32" aria-label="Início">
      {/* Blobs de cor ao fundo — leve e alegre, sem preto */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-24 h-56 w-56 rounded-full bg-sun/40 blur-2xl" />
        <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-sky/30 blur-2xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-lime/25 blur-2xl" />
      </div>

      <div className="shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            {...fade}
            transition={{ duration: 0.4 }}
            className="pill bg-sun text-ink"
          >
            🌴 Open bar & drinks autorais · Rio
          </motion.span>

          <motion.h1
            {...fade}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 font-display text-fluid-2xl font-bold leading-[0.98] text-ink"
          >
            Drinks que transformam{" "}
            <span className="text-tangerine">qualquer rolê.</span>
          </motion.h1>

          <motion.p
            {...fade}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-5 max-w-xl text-lg text-graphite sm:text-xl"
          >
            A gente leva open bar, coquetéis autorais e a galera mais animada
            pra fazer a bebida da sua festa. Bora brindar? 🍹
          </motion.p>

          <motion.div
            {...fade}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/orcamento"
              className="flex h-14 items-center justify-center rounded-full bg-tangerine px-8 font-display text-lg font-semibold text-paper shadow-[0_9px_0_-2px_#c9500f] transition-transform hover:-translate-y-0.5 active:scale-95 sm:h-16 sm:text-xl"
            >
              Pedir orçamento
            </Link>
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-2 rounded-full border-[2.5px] border-ink px-8 font-display text-lg font-semibold text-ink transition-transform hover:-translate-y-0.5 active:scale-95 sm:h-16 sm:text-xl"
            >
              <Instagram className="h-5 w-5" /> Ver no Instagram
            </a>
          </motion.div>
        </div>

        {/* Mídia grande. Para colocar vídeo depois: troque a <Image> por um
            <video autoPlay muted loop playsInline> com as mesmas classes. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto mt-12 max-w-4xl"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[5px] border-ink bg-sand shadow-card sm:aspect-[16/10] sm:rounded-[2.5rem]">
            <Image
              src="/images/nossos-drinks.jpg"
              alt="Amigos brindando com os coquetéis coloridos da Drinks du Bigode"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
            <div className="absolute inset-0 grid place-items-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lg sm:h-20 sm:w-20">
                <Play className="h-7 w-7 translate-x-0.5 fill-ink sm:h-9 sm:w-9" />
              </span>
            </div>
          </div>
          {/* Selo giratório divertido */}
          <span className="absolute -right-3 -top-5 hidden rotate-6 rounded-full bg-lime px-4 py-2 font-display text-sm font-bold text-paper shadow-lg sm:block">
            feito na hora ✨
          </span>
        </motion.div>
      </div>

      {/* onda decorativa de transição */}
      <div className="mt-14" />
    </section>
  );
}
