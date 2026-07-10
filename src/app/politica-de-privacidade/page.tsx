import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Drinks du Bigode coleta, usa e protege os seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function Page() {
  return (
    <LegalShell
      kicker="Privacidade"
      title="Política de Privacidade"
      updated="Julho de 2026"
      intro={`A ${site.legalName} respeita a sua privacidade e trata seus dados pessoais com transparência e segurança, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018). Esta política explica quais dados coletamos, por que os coletamos e quais são os seus direitos.`}
      sections={[
        {
          title: "Dados que coletamos",
          body: [
            "Dados que você nos fornece: nome, e-mail, telefone/WhatsApp, cidade, tipo e data do evento e as informações escritas no formulário de orçamento.",
            "Dados de navegação: com o seu consentimento, informações técnicas anônimas como páginas visitadas e origem de acesso, por meio de cookies de análise.",
          ],
        },
        {
          title: "Como usamos os seus dados",
          body: [
            "Para elaborar e enviar propostas de orçamento e entrar em contato sobre o seu evento.",
            "Para melhorar a experiência do site e nossos serviços.",
            "Nunca vendemos seus dados. Só os compartilhamos com fornecedores estritamente necessários à prestação do serviço (por exemplo, ferramentas de e-mail), sempre com salvaguardas de segurança.",
          ],
        },
        {
          title: "Base legal",
          body: [
            "O tratamento de dados do formulário se dá com base no seu consentimento e na execução de procedimentos preliminares a um contrato, conforme o art. 7º da LGPD.",
          ],
        },
        {
          title: "Seus direitos",
          body: [
            "Você pode, a qualquer momento, solicitar acesso, correção, portabilidade, anonimização ou exclusão dos seus dados, bem como revogar o consentimento.",
            `Para exercer esses direitos, escreva para ${site.contact.email}. Responderemos dentro dos prazos legais.`,
          ],
        },
        {
          title: "Retenção e segurança",
          body: [
            "Mantemos seus dados apenas pelo tempo necessário para as finalidades descritas ou conforme exigência legal. Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado.",
          ],
        },
        {
          title: "Contato do encarregado",
          body: [
            `Dúvidas sobre esta política ou sobre o tratamento dos seus dados podem ser encaminhadas para ${site.contact.email}.`,
          ],
        },
      ]}
    />
  );
}
