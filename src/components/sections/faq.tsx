"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-24 sm:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="kicker">Perguntas frequentes</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-fluid-xl font-extrabold leading-[0.98] tracking-tightest text-ink">
              Tudo que você{" "}
              <span className="font-serif font-light italic text-flame">
                precisa saber
              </span>{" "}
              antes de brindar.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-graphite/75">
              Não achou sua resposta? Chame a gente no WhatsApp — respondemos
              rápido e sem robô.
            </p>
          </Reveal>
        </div>

        <div className="lg:pt-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="border-t border-ink/12 last:border-b">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-all duration-500 ease-out-expo",
                        isOpen && "rotate-45 bg-ink text-paper",
                      )}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-7 text-[0.95rem] leading-relaxed text-graphite/80">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
