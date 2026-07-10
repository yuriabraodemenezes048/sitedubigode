"use client";

import { useEffect, useState } from "react";

/**
 * Hook SSR-safe para media queries. Retorna false no servidor e no primeiro
 * paint, evitando hydration mismatch — o valor real chega logo após montar.
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** true em telas >= 1024px (desktop). Usado para ligar parallax/efeitos pesados. */
export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}
