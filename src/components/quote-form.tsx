"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import {
  quoteSchema,
  eventTypes,
  guestRanges,
  type QuoteInput,
} from "@/lib/schema";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/site";

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
        transition={{ duration: 0.4 }}
        className="flex min-h-[420px] flex-col items-center justify-center rounded-[2rem] border-2 border-ink/10 bg-paper p-10 text-center"
      >
        <span className="text-6xl">🎉</span>
        <h3 className="mt-5 font-display text-3xl font-bold text-ink">Recebido! 🍹</h3>
        <p className="mt-3 max-w-md text-graphite">
          Seu pedido chegou pra gente. Já já a gente te responde. Quer adiantar?
          Chama no WhatsApp!
        </p>
        <a
          href={whatsappUrl("Acabei de pedir um orçamento pelo site! 🍹")}
          className="mt-7 flex h-14 items-center justify-center rounded-full bg-[#25D366] px-8 font-display text-lg font-semibold text-white shadow-[0_8px_0_-2px_#1a9e4b] transition-transform hover:-translate-y-0.5 active:scale-95"
        >
          Chamar no WhatsApp
        </a>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-[2rem] border-2 border-ink/10 bg-paper p-6 sm:p-8"
    >
      {/* Tipo de evento */}
      <fieldset>
        <legend className="font-display font-bold text-ink">
          Qual é o rolê? <span className="text-berry">*</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {eventTypes.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setValue("eventType", t, { shouldValidate: true, shouldTouch: true })}
              className={cn(
                "rounded-full border-2 px-4 py-2.5 font-display text-sm font-semibold transition-colors",
                eventType === t
                  ? "border-tangerine bg-tangerine text-paper"
                  : "border-ink/15 text-graphite hover:border-tangerine",
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <FieldError msg={errors.eventType?.message} />
      </fieldset>

      {/* Convidados */}
      <fieldset className="mt-7">
        <legend className="font-display font-bold text-ink">
          Quantas pessoas? <span className="text-berry">*</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {guestRanges.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setValue("guests", g, { shouldValidate: true, shouldTouch: true })}
              className={cn(
                "rounded-full border-2 px-4 py-2.5 font-display text-sm font-semibold transition-colors",
                guests === g
                  ? "border-tangerine bg-tangerine text-paper"
                  : "border-ink/15 text-graphite hover:border-tangerine",
              )}
            >
              {g}
            </button>
          ))}
        </div>
        <FieldError msg={errors.guests?.message} />
      </fieldset>

      {/* Dados de contato */}
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <Field label="Seu nome" required error={errors.name?.message}>
          <input {...register("name")} autoComplete="name" placeholder="Como te chamam?" className={inputCls} />
        </Field>
        <Field label="E-mail" required error={errors.email?.message}>
          <input {...register("email")} type="email" autoComplete="email" placeholder="voce@email.com" className={inputCls} />
        </Field>
        <Field label="WhatsApp" required error={errors.phone?.message}>
          <input {...register("phone")} type="tel" autoComplete="tel" placeholder="(21) 99999-9999" className={inputCls} />
        </Field>
        <Field label="Cidade da festa" required error={errors.city?.message}>
          <input {...register("city")} autoComplete="address-level2" placeholder="Rio de Janeiro, RJ" className={inputCls} />
        </Field>
        <Field label="Data (se já tiver)" error={errors.date?.message}>
          <input {...register("date")} type="text" placeholder="Ex.: 14/12 ou ‘ainda vendo’" className={inputCls} />
        </Field>
      </div>

      <Field label="Conta um pouco da festa" error={errors.message?.message} className="mt-4">
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Vibe do rolê, drinks favoritos, o que não pode faltar..."
          className={cn(inputCls, "resize-none")}
        />
      </Field>

      {/* Honeypot */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Não preencha
          <input {...register("company")} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Consentimento LGPD */}
      <label className="mt-6 flex cursor-pointer items-start gap-3">
        <input
          {...register("consent")}
          type="checkbox"
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded accent-tangerine"
        />
        <span className="text-sm leading-relaxed text-graphite">
          Pode usar meus dados pra falar comigo sobre o orçamento, conforme a{" "}
          <a href="/politica-de-privacidade" className="font-semibold text-tangerine underline">
            Política de Privacidade
          </a>
          . <span className="text-berry">*</span>
        </span>
      </label>
      <FieldError msg={errors.consent?.message} />

      {status === "error" && (
        <p className="mt-4 rounded-2xl bg-berry/10 px-4 py-3 text-sm font-semibold text-berry">
          Deu ruim no envio 😅 Tenta de novo ou chama no WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 flex h-16 w-full items-center justify-center gap-2 rounded-full bg-tangerine px-8 font-display text-xl font-semibold text-paper shadow-[0_9px_0_-2px_#c9500f] transition-transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Enviando...
          </>
        ) : (
          "Bora! Enviar pedido 🍹"
        )}
      </button>
      <p className="mt-3 text-center text-xs text-stone">Sem spam, prometido. 🤙</p>
    </form>
  );
}

const inputCls =
  "w-full rounded-2xl border-2 border-ink/15 bg-cream px-4 py-3.5 text-[0.98rem] text-ink placeholder:text-stone outline-none transition-colors focus:border-tangerine";

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
      <span className="font-display text-sm font-bold text-ink">
        {label} {required && <span className="text-berry">*</span>}
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
          className="mt-1.5 block text-xs font-semibold text-berry"
        >
          {msg}
        </motion.span>
      )}
    </AnimatePresence>
  );
}
