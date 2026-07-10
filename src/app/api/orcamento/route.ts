import { NextRequest, NextResponse } from "next/server";
import { quoteSchema } from "@/lib/schema";

export const runtime = "nodejs";

/**
 * Rate limiting em memória — barreira simples por IP.
 * Para produção multi-instância, troque por Upstash/Redis mantendo a mesma
 * interface. Estrutura pronta para reCAPTCHA/Turnstile: valide o token antes
 * de processar (ver comentário abaixo).
 */
const WINDOW_MS = 60_000;
const MAX_REQ = 5;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_REQ) return false;
  entry.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "anon";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Muitas tentativas. Tente novamente em instantes." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Requisição inválida." }, { status: 400 });
  }

  // Validação + sanitização no servidor (nunca confie só no cliente)
  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Confira os campos e tente de novo.", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  // Honeypot preenchido = bot silencioso
  if (parsed.data.company && parsed.data.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // TODO integração: validar token do reCAPTCHA/Turnstile aqui, e então
  // encaminhar o lead (e-mail transacional, CRM ou planilha). Mantido como
  // estrutura pronta para não expor segredos no frontend.
  const lead = parsed.data;
  console.info("[orcamento] novo lead", {
    name: lead.name,
    eventType: lead.eventType,
    guests: lead.guests,
    city: lead.city,
    date: lead.date,
  });

  return NextResponse.json({ ok: true });
}
