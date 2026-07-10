"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site, whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <div className="shell">
          <div
            className={cn(
              "flex items-center justify-between rounded-full transition-all duration-500 ease-out-expo",
              scrolled
                ? "glass border border-ink/5 px-3 py-2 shadow-[0_12px_40px_-24px_rgba(17,17,16,0.5)]"
                : "px-1 py-1",
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              aria-label={`${site.name} — início`}
              className="group flex items-center gap-3 pl-1"
            >
              <span className="relative block h-11 w-11 overflow-hidden rounded-full ring-1 ring-ink/10">
                <Image
                  src="/images/logo.jpg"
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                  priority
                />
              </span>
              <span className="hidden flex-col leading-none sm:flex">
                <span className="font-display text-[0.95rem] font-extrabold tracking-tightest text-ink">
                  Drinks du Bigode
                </span>
                <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-stone">
                  Open bar autoral
                </span>
              </span>
            </Link>

            {/* Nav desktop */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-graphite/80 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + menu toggle */}
            <div className="flex items-center gap-2">
              <Button
                href="/orcamento"
                size="md"
                arrow
                className="hidden sm:inline-flex"
              >
                Solicitar orçamento
              </Button>
              <button
                onClick={() => setOpen(true)}
                aria-label="Abrir menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-paper lg:hidden"
              >
                <Menu className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile — overlay tipo app nativo */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink text-paper grain lg:hidden"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-5">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg italic text-paper/70">
                  du Bigode
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-auto flex flex-col gap-1" aria-label="Mobile">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, ease: EASE, duration: 0.6 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-paper/10 py-4 font-display text-4xl font-extrabold tracking-tightest text-paper"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-10 flex flex-col gap-3">
                <Button
                  href="/orcamento"
                  variant="light"
                  size="lg"
                  arrow
                  onClick={() => setOpen(false)}
                >
                  Solicitar orçamento
                </Button>
                <Button
                  href={whatsappUrl("Olá! Vim pelo site e quero um orçamento.")}
                  external
                  variant="outline"
                  size="lg"
                  className="border-paper/30 text-paper hover:bg-paper hover:text-ink"
                >
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
