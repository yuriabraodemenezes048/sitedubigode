import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Pedir orçamento",
  description:
    "Conta a data, o local e quantas pessoas — a gente volta rapidinho com uma proposta com a cara da sua festa. Sem compromisso!",
  alternates: { canonical: "/orcamento" },
};

const perks = [
  { emoji: "🍹", text: "Drink com a cara da sua festa" },
  { emoji: "⚡", text: "Resposta rapidinho" },
  { emoji: "🙌", text: "Sem compromisso e sem spam" },
];

export default function OrcamentoPage() {
  return (
    <div className="bg-cream">
      <div className="shell grid gap-10 pb-24 pt-28 sm:pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Coluna de texto */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="pill bg-sun text-ink">bora brindar 🍹</span>
            <h1 className="mt-5 font-display text-fluid-xl font-bold leading-[1.02] text-ink">
              Conta pra gente sobre a <span className="text-tangerine">sua festa!</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-graphite">
              Leva menos de 2 minutos. Quanto mais você contar da vibe, melhor
              fica a nossa proposta.
            </p>

            <ul className="mt-8 space-y-3">
              {perks.map((p) => (
                <li key={p.text} className="flex items-center gap-3 rounded-2xl bg-paper px-4 py-3 border-2 border-ink/10">
                  <span className="text-2xl">{p.emoji}</span>
                  <span className="font-display font-semibold text-ink">{p.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Formulário */}
        <Reveal delay={0.1}>
          <QuoteForm />
        </Reveal>
      </div>
    </div>
  );
}
