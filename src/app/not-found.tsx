import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink text-paper grain">
      <div className="shell relative z-10 py-32 text-center">
        <p
          aria-hidden
          className="font-display text-[26vw] font-black leading-none tracking-tightest text-paper/[0.07] sm:text-[18rem]"
        >
          404
        </p>
        <div className="-mt-[10vw] sm:-mt-32">
          <p className="kicker mx-auto w-fit text-paper/50 before:bg-paper/40">
            Copo vazio
          </p>
          <h1 className="mt-6 font-display text-fluid-xl font-extrabold tracking-tightest">
            Essa página{" "}
            <span className="font-serif font-light italic text-flame">
              secou
            </span>
            .
          </h1>
          <p className="mx-auto mt-4 max-w-md text-paper/70">
            O link que você seguiu não existe (ou virou história). Bora voltar
            pra parte boa?
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-8 py-4 text-sm font-semibold text-ink transition-all duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-flame hover:text-paper"
            >
              Voltar ao início
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-8 py-4 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
