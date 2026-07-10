"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import { nav, site, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 30));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 py-3">
        <div className="shell">
          <div
            className={cn(
              "flex items-center justify-between rounded-full border-2 border-ink/10 bg-paper/90 px-2.5 py-2 backdrop-blur transition-shadow duration-300",
              scrolled ? "shadow-card" : "shadow-none",
            )}
          >
            {/* Logo */}
            <Link href="/" aria-label={`${site.name} — início`} className="flex items-center gap-2.5 pl-1">
              <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-2 ring-sun">
                <Image src="/images/logo.jpg" alt="" fill sizes="40px" className="object-cover" priority />
              </span>
              <span className="font-display text-base font-bold leading-none text-ink">
                Drinks du Bigode
              </span>
            </Link>

            {/* Nav desktop */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 font-display text-[0.95rem] font-medium text-graphite transition-colors hover:bg-sun/25 hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTAs */}
            <div className="flex items-center gap-2">
              <Link
                href="/orcamento"
                className="hidden h-11 items-center rounded-full bg-tangerine px-5 font-display text-[0.95rem] font-semibold text-paper shadow-[0_6px_0_-1px_#c9500f] transition-transform hover:-translate-y-0.5 active:scale-95 sm:inline-flex"
              >
                Pedir orçamento
              </Link>
              <button
                onClick={() => setOpen(true)}
                aria-label="Abrir menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper lg:hidden"
              >
                <Menu className="h-5 w-5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile — colorido, tipo app */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-sun lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex h-full flex-col px-6 pb-8 pt-5">
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-bold text-ink">du Bigode 🍹</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper"
                >
                  <X className="h-5 w-5" strokeWidth={2.5} />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-3xl bg-paper px-6 py-4 font-display text-2xl font-bold text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3">
                <Link
                  href="/orcamento"
                  onClick={() => setOpen(false)}
                  className="flex h-14 items-center justify-center rounded-full bg-tangerine font-display text-lg font-semibold text-paper shadow-[0_8px_0_-2px_#c9500f]"
                >
                  Pedir orçamento
                </Link>
                <a
                  href={whatsappUrl("Oi! Vim pelo site e quero um orçamento 🍹")}
                  className="flex h-14 items-center justify-center gap-2 rounded-full bg-[#25D366] font-display text-lg font-semibold text-white shadow-[0_8px_0_-2px_#1a9e4b]"
                >
                  Chamar no WhatsApp
                </a>
                <a
                  href={site.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 items-center justify-center gap-2 rounded-full border-[2.5px] border-ink font-display text-lg font-semibold text-ink"
                >
                  <Instagram className="h-5 w-5" /> Seguir no Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
