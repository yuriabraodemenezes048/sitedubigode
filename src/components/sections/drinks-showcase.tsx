"use client";

import Image from "next/image";
import { drinks } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const border: Record<string, string> = {
  berry: "border-berry",
  sun: "border-sun",
  lime: "border-lime",
  tangerine: "border-tangerine",
};
const badge: Record<string, string> = {
  berry: "bg-berry text-paper",
  sun: "bg-sun text-ink",
  lime: "bg-lime text-paper",
  tangerine: "bg-tangerine text-paper",
};

export function DrinksShowcase() {
  return (
    <section id="drinks" className="bg-paper py-20 sm:py-28">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="pill bg-tangerine/15 text-tangerine">os queridinhos</span>
          <h2 className="mt-5 font-display text-fluid-xl font-bold leading-[1.05] text-ink">
            Nossos drinks de assinatura 🍹
          </h2>
          <p className="mt-4 text-lg text-graphite">
            E dá pra criar um só pra sua festa, com o nome que você quiser.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {drinks.map((d) => (
            <StaggerItem key={d.id}>
              <div className="flex h-full flex-col">
                <div
                  className={cn(
                    "relative aspect-[3/4] overflow-hidden rounded-[1.5rem] border-[4px] bg-sand",
                    border[d.accent],
                  )}
                >
                  <Image
                    src={d.poster}
                    alt={`${d.name} — ${d.notes}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="object-cover"
                  />
                  <span
                    className={cn(
                      "absolute left-3 top-3 rounded-full px-3 py-1 font-display text-xs font-bold",
                      badge[d.accent],
                    )}
                  >
                    {d.spirit}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {d.emoji} {d.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-graphite">{d.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
