"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const KEY = "ddb-consent-v1";
type Consent = "all" | "essential";

/**
 * Banner de consentimento LGPD. Guarda a escolha no localStorage e emite um
 * CustomEvent para que scripts de analytics (GA4 / Meta Pixel) só carreguem
 * após opt-in explícito — nenhum cookie de rastreio antes disso.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (consent: Consent) => {
    localStorage.setItem(KEY, consent);
    window.dispatchEvent(
      new CustomEvent("ddb-consent", { detail: consent }),
    );
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Consentimento de cookies"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-2xl sm:inset-x-4 sm:bottom-4"
        >
          <div className="glass rounded-2xl border border-ink/10 p-5 shadow-[0_20px_60px_-24px_rgba(17,17,16,0.55)] sm:flex sm:items-center sm:gap-6 sm:p-6">
            <div className="flex-1">
              <p className="font-display text-sm font-bold tracking-tight text-ink">
                Um brinde à sua privacidade 🍸
              </p>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed text-graphite/75">
                Usamos cookies essenciais para o site funcionar e, com o seu
                aceite, cookies de análise para melhorar sua experiência. Leia a{" "}
                <Link
                  href="/politica-de-cookies"
                  className="font-medium text-flame underline underline-offset-2"
                >
                  Política de Cookies
                </Link>
                .
              </p>
            </div>
            <div className="mt-4 flex gap-2.5 sm:mt-0 sm:shrink-0">
              <button
                onClick={() => decide("essential")}
                className="h-10 flex-1 rounded-full border border-ink/20 px-4 text-sm font-semibold text-ink transition-colors hover:bg-ink/5 sm:flex-none"
              >
                Só essenciais
              </button>
              <button
                onClick={() => decide("all")}
                className="h-10 flex-1 rounded-full bg-flame px-5 text-sm font-semibold text-paper transition-colors hover:bg-olive sm:flex-none"
              >
                Aceitar tudo
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
