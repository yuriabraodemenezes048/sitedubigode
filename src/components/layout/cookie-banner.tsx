"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const KEY = "ddb-consent-v1";
type Consent = "all" | "essential";

/**
 * Banner de consentimento LGPD. Guarda a escolha e emite um CustomEvent para
 * que analytics (GA4 / Meta Pixel) só carreguem após opt-in explícito.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (consent: Consent) => {
    localStorage.setItem(KEY, consent);
    window.dispatchEvent(new CustomEvent("ddb-consent", { detail: consent }));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Consentimento de cookies"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-x-3 bottom-24 z-30 mx-auto max-w-md sm:bottom-5 sm:left-5 sm:right-auto sm:mx-0"
        >
          <div className="card border-ink/10 p-5 shadow-card">
            <p className="font-display text-base font-bold text-ink">Cookies? 🍪</p>
            <p className="mt-1 text-sm leading-relaxed text-graphite">
              A gente usa uns cookies pra deixar o site melhor. Veja a{" "}
              <Link href="/politica-de-cookies" className="font-semibold text-tangerine underline">
                política
              </Link>
              .
            </p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => decide("essential")}
                className="h-11 flex-1 rounded-full border-2 border-ink/15 font-display text-sm font-semibold text-ink"
              >
                Só o básico
              </button>
              <button
                onClick={() => decide("all")}
                className="h-11 flex-1 rounded-full bg-tangerine font-display text-sm font-semibold text-paper"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
