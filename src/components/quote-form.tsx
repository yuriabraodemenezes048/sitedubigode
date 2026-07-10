"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, PartyPopper } from "lucide-react";
import {
  quoteSchema,
  eventTypes,
  guestRanges,
  type QuoteInput,
} from "@/lib/schema";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { eventType: undefined, guests: undefined, consent: undefined },
    mode: "onTouched",
  });

  const eventType = watch("eventType");
  const guests = watch("guests");

  const onSubmit = async (data: QuoteInput) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-ink/10 bg-cream p-10 text-center"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-tropical/10 text-tropical">
          <PartyPopper className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-display text-3xl font-extrabold tracking-tightest text-ink">
          Recebido! Vamos brindar.
        </h3>
        <p className="mt-3 max-w-md text-graphite/75">
          Seu pedido chegou até a gente. Em poucas horas você recebe uma proposta
          sob medida no seu e-mail. Quer adiantar? Fale com a gente agora.
        </p>
        <a
          href={whatsappUrl("Acabei de solicitar um orçamento pelo site!")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-paper transition-colors hover:bg-flame"
        >
          Adiantar pelo WhatsApp
        </a>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-ink/10 bg-cream p-6 sm:p-9"
    >
      {/* Tipo de evento */}
      <fieldset>
        <legend className="text-sm font-semibold text-ink">
          Que tipo de evento é? <span className="text-flame">*</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {eventTypes.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() =>
                setValue("eventType", t, { shouldValidate: true, shouldTouch: true })
              }
              className={cn(
                "rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300",
                eventType === t
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 text-graphite/80 hover:border-ink/40",
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <FieldError msg={errors.eventType?.message} />
      </fieldset>

      {/* Convidados */}
      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-ink">
          Quantos convidados? <span className="text-flame">*</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {guestRanges.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() =>
                setValue("guests", g, { shouldValidate: true, shouldTouch: true })
              }
              className={cn(
                "rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300",
                guests === g
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 text-graphite/80 hover:border-ink/40",
              )}
            >
              {g}
            </button>
          ))}
        </div>
        <FieldError msg={errors.guests?.message} />
      </fieldset>

      {/* Dados de contato */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Seu nome" required error={errors.name?.message}>
          <input
            {...register("name")}
            autoComplete="name"
            placeholder="Como podemos te chamar?"
            className={inputCls}
          />
        </Field>
        <Field label="E-mail" required error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="voce@email.com"
            className={inputCls}
          />
        </Field>
        <Field label="WhatsApp / Telefone" required error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            autoComplete="tel"
            placeholder="(11) 99999-9999"
            className={inputCls}
          />
        </Field>
        <Field label="Cidade do evento" required error={errors.city?.message}>
          <input
            {...register("city")}
            autoComplete="address-level2"
            placeholder="Rio de Janeiro, RJ"
            className={inputCls}
          />
        </Field>
        <Field label="Data (se já tiver)" error={errors.date?.message}>
          <input
            {...register("date")}
            type="text"
            placeholder="Ex.: 14/12/2026 ou ‘ainda escolhendo’"
            className={inputCls}
          />
        </Field>
        <div className="sm:row-span-1" />
      </div>

      <Field label="Conte um pouco do seu evento" error={errors.message?.message} className="mt-5">
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Estilo da festa, drinks favoritos, o que não pode faltar..."
          className={cn(inputCls, "resize-none")}
        />
      </Field>

      {/* Honeypot — invisível para humanos */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Não preencha
          <input {...register("company")} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Consentimento LGPD */}
      <label className="mt-7 flex cursor-pointer items-start gap-3">
        <input
          {...register("consent")}
          type="checkbox"
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-ink/30 accent-flame"
        />
        <span className="text-[0.82rem] leading-relaxed text-graphite/75">
          Autorizo a Drinks du Bigode a usar meus dados para entrar em contato
          sobre este orçamento, conforme a{" "}
          <a href="/politica-de-privacidade" className="font-medium text-flame underline underline-offset-2">
            Política de Privacidade
          </a>
          . <span className="text-flame">*</span>
        </span>
      </label>
      <FieldError msg={errors.consent?.message} />

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-flame/10 px-4 py-3 text-sm text-flame">
          Algo deu errado no envio. Tente novamente ou fale no WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-ink px-8 text-[0.95rem] font-semibold text-paper transition-all duration-500 ease-out-expo hover:bg-flame disabled:opacity-70 sm:w-auto"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "sending" ? (
            <motion.span key="s" className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
            </motion.span>
          ) : (
            <motion.span key="i" className="flex items-center gap-2">
              Enviar pedido de orçamento <Check className="h-4 w-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
      <p className="mt-4 text-xs text-stone">
        Resposta em até algumas horas em dias úteis. Sem spam, prometido.
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-[0.95rem] text-ink placeholder:text-stone/70 outline-none transition-colors focus:border-ink focus:ring-2 focus:ring-ink/10";

function Field({
  label,
  required,
  error,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="text-sm font-semibold text-ink">
        {label} {required && <span className="text-flame">*</span>}
      </span>
      <span className="mt-2 block">{children}</span>
      <FieldError msg={error} />
    </label>
  );
}

function FieldError({ msg }: { msg?: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.span
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-1.5 block text-xs font-medium text-flame"
        >
          {msg}
        </motion.span>
      )}
    </AnimatePresence>
  );
}
