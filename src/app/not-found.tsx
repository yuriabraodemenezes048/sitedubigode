import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center bg-cream px-6 py-32 text-center">
      <span className="text-7xl sm:text-8xl">🍹💨</span>
      <h1 className="mt-6 font-display text-5xl font-bold text-ink sm:text-7xl">
        Ops, esse copo secou!
      </h1>
      <p className="mt-4 max-w-md text-lg text-graphite">
        A página que você procurou não existe (ou já virou história). Bora voltar
        pra parte boa?
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="flex h-14 items-center justify-center rounded-full bg-tangerine px-8 font-display text-lg font-semibold text-paper shadow-[0_8px_0_-2px_#c9500f] transition-transform hover:-translate-y-0.5 active:scale-95"
        >
          Voltar pro início
        </Link>
        <Link
          href="/orcamento"
          className="flex h-14 items-center justify-center rounded-full border-[2.5px] border-ink px-8 font-display text-lg font-semibold text-ink transition-transform hover:-translate-y-0.5 active:scale-95"
        >
          Pedir orçamento
        </Link>
      </div>
    </div>
  );
}
