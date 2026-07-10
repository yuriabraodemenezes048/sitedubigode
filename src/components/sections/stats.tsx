"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/lib/site";
import { cn } from "@/lib/utils";

const colors = ["bg-sun text-ink", "bg-tangerine text-paper", "bg-lime text-paper", "bg-sky text-paper"];

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="shell">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "flex flex-col items-center justify-center rounded-[1.5rem] px-4 py-8 text-center",
                colors[i % colors.length],
              )}
            >
              <div className="font-display text-4xl font-bold sm:text-5xl">
                <Counter value={s.value} decimals={"decimals" in s ? s.decimals : 0} />
                {s.suffix}
              </div>
              <p className="mt-1.5 font-display text-sm font-semibold opacity-90">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
