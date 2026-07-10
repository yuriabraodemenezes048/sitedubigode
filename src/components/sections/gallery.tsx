"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Instagram } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Shot = { src: string; alt: string; span: string };

const shots: Shot[] = [
  { src: "/images/nossos-drinks.jpg", alt: "Amigos brindando", span: "col-span-2 row-span-2" },
  { src: "/images/lovegin-glass.jpg", alt: "LoveGin na taça", span: "" },
  { src: "/images/mate-glass.jpg", alt: "Mate Du'Bigode", span: "" },
  { src: "/images/tropicaipi-poster.jpg", alt: "Tropicaipi sendo servido", span: "row-span-2" },
  { src: "/images/caipi-glass.jpg", alt: "Caipi Du'Bigode", span: "" },
  { src: "/images/lovegin-poster.jpg", alt: "LoveGin com laranjas", span: "" },
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
    <section id="galeria" className="bg-cream py-20 sm:py-28">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="pill bg-berry/15 text-berry">a festa é assim 📸</span>
          <h2 className="mt-5 font-display text-fluid-xl font-bold leading-[1.05] text-ink">
            Rolê real, drink de verdade.
          </h2>
          <p className="mt-4 text-lg text-graphite">Toca numa foto pra ver de perto.</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 grid auto-rows-[150px] grid-cols-3 gap-3 sm:auto-rows-[210px] sm:grid-cols-4">
            {shots.map((shot, i) => (
              <button
                key={shot.src}
                onClick={() => setOpen(i)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border-[3px] border-ink/10 bg-sand",
                  shot.span,
                )}
                aria-label={`Ampliar: ${shot.alt}`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <a
            href={site.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-8 font-display text-lg font-semibold text-paper transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            <Instagram className="h-5 w-5" /> Ver mais no Instagram
          </a>
        </Reveal>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/85 p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute right-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-paper text-ink"
            >
              <X className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <motion.div
              key={open}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative h-full max-h-[80vh] w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={shots[open].src} alt={shots[open].alt} fill sizes="100vw" className="rounded-2xl object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
