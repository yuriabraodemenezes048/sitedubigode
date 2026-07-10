"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Shot = { src: string; alt: string; span: string };

const shots: Shot[] = [
  { src: "/images/nossos-drinks.jpg", alt: "Brinde com quatro coquetéis autorais", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/lovegin-glass.jpg", alt: "LoveGin em taça com laranja e alecrim", span: "" },
  { src: "/images/mate-glass.jpg", alt: "Mate Du'Bigode com maracujá e gengibre", span: "" },
  { src: "/images/tropicaipi-poster.jpg", alt: "Tropicaipi sendo servido com maracujá fresco", span: "sm:row-span-2" },
  { src: "/images/caipi-glass.jpg", alt: "Caipi Du'Bigode com abacaxi e manjericão", span: "" },
  { src: "/images/lovegin-poster.jpg", alt: "Pôster LoveGin com laranjas espremidas", span: "" },
  { src: "/images/mate-poster.jpg", alt: "Pôster Mate Du'Bigode com limão e maracujá", span: "sm:col-span-2" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % shots.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + shots.length) % shots.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <section id="galeria" className="bg-cream py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="kicker">Na taça e na festa</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-xl font-display text-fluid-xl font-extrabold leading-[0.98] tracking-tightest text-ink">
                A prova está no{" "}
                <span className="font-serif font-light italic text-flame">
                  brinde
                </span>
                .
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-graphite/70">
              Clique em qualquer imagem para ver de perto. Cada drink é feito na
              hora, na frente dos convidados.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:grid-cols-4">
            {shots.map((shot, i) => (
              <button
                key={shot.src}
                onClick={() => setOpen(i)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-sand ring-1 ring-ink/5",
                  shot.span,
                )}
                aria-label={`Ampliar: ${shot.alt}`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
                <span className="absolute bottom-3 left-3 right-3 translate-y-2 text-left text-xs font-medium text-paper opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                  {shot.alt}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Galeria ampliada"
          >
            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              key={open}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full max-h-[82vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={shots[open].src}
                alt={shots[open].alt}
                fill
                sizes="100vw"
                className="rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
