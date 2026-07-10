"use client";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import { useIsDesktop } from "@/lib/use-media-query";

/**
 * Scroll suave global via Lenis — apenas no desktop. No celular usamos o
 * scroll nativo (mais rápido e natural ao toque). Também desativado para
 * quem prefere menos movimento.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (!isDesktop) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let rafId: number;
    function raf(time: number) {
      lenisRef.current?.lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(rafId);
  }, [isDesktop]);

  // Mobile / SSR: scroll nativo, sem overhead do Lenis.
  if (!isDesktop) return <>{children}</>;

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
        anchors: { offset: -90 },
      }}
    >
      {children}
    </ReactLenis>
  );
}
