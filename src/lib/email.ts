import { Resend } from "resend";
import { site } from "@/lib/site";
import type { QuoteData } from "@/lib/schema";

/**
 * Envia o e-mail de notificação de um novo orçamento via Resend.
 *
 * Configuração (variáveis de ambiente na Vercel):
 *  - RESEND_API_KEY   (obrigatória para enviar)
 *  - LEAD_NOTIFY_EMAIL (opcional; padrão: e-mail de contato do site)
 *  - MAIL_FROM        (opcional; padrão: onboarding@resend.dev — troque pelo
 *                      seu domínio verificado quando tiver um)
 *
 * Sem RESEND_API_KEY, a função apenas registra o lead no log e retorna
 * `skipped`, para o formulário continuar funcionando em dev/preview.
 */
export async function sendLeadEmail(lead: QuoteData) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL || site.contact.email;
  const from = process.env.MAIL_FROM || "Drinks du Bigode <onboarding@resend.dev>";

  if (!apiKey) {
    console.info("[orcamento] RESEND_API_KEY ausente — lead apenas no log:", {
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      eventType: lead.eventType,
      guests: lead.guests,
      city: lead.city,
      date: lead.date,
    });
    return { ok: true, skipped: true as const };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: lead.email,
    subject: `🍸 Novo orçamento: ${lead.eventType} · ${lead.name}`,
    html: buildHtml(lead),
    text: buildText(lead),
  });

  if (error) {
    // Loga o lead completo para não perder o contato caso o envio falhe.
    console.error("[orcamento] falha ao enviar e-mail:", error, lead);
    return { ok: false as const, error };
  }

  return { ok: true as const, skipped: false as const };
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #ece7de;color:#8C877B;font-size:13px;width:150px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #ece7de;color:#26251F;font-size:15px;font-weight:600;">${escapeHtml(value)}</td>
    </tr>`;
}

function buildHtml(lead: QuoteData) {
  const wa = lead.phone.replace(/\D/g, "");
  return `
  <div style="background:#F5F1EA;padding:24px;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#FBF9F5;border-radius:20px;overflow:hidden;border:1px solid #ece7de;">
      <div style="background:#111110;padding:28px 32px;">
        <p style="margin:0;color:#C1352B;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:700;">Novo pedido de orçamento</p>
        <h1 style="margin:8px 0 0;color:#FBF9F5;font-size:24px;font-weight:800;letter-spacing:-0.5px;">${escapeHtml(lead.name)} quer brindar 🍸</h1>
      </div>
      <div style="padding:24px 32px;">
        <table style="width:100%;border-collapse:collapse;">
          ${row("Evento", lead.eventType)}
          ${row("Convidados", lead.guests)}
          ${row("Cidade", lead.city)}
          ${row("Data", lead.date || "A definir")}
          ${row("E-mail", lead.email)}
          ${row("WhatsApp", lead.phone)}
          ${lead.message ? row("Mensagem", lead.message) : ""}
        </table>
        <div style="margin-top:24px;display:flex;gap:10px;">
          <a href="https://wa.me/${wa}" style="display:inline-block;background:#111110;color:#FBF9F5;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:14px;font-weight:700;">Responder no WhatsApp</a>
          <a href="mailto:${lead.email}" style="display:inline-block;border:1px solid #d9d2c6;color:#26251F;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:14px;font-weight:700;">Responder por e-mail</a>
        </div>
      </div>
      <div style="padding:16px 32px;background:#F0EBE2;color:#8C877B;font-size:12px;">
        Enviado pelo formulário de orçamento do site ${site.name}.
      </div>
    </div>
  </div>`;
}

function buildText(lead: QuoteData) {
  return [
    `Novo pedido de orçamento — ${site.name}`,
    ``,
    `Nome: ${lead.name}`,
    `Evento: ${lead.eventType}`,
    `Convidados: ${lead.guests}`,
    `Cidade: ${lead.city}`,
    `Data: ${lead.date || "A definir"}`,
    `E-mail: ${lead.email}`,
    `WhatsApp: ${lead.phone}`,
    lead.message ? `Mensagem: ${lead.message}` : ``,
  ]
    .filter(Boolean)
    .join("\n");
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
