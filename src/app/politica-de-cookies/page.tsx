import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "O que são cookies, quais utilizamos no site da Drinks du Bigode e como você pode gerenciar o seu consentimento.",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function Page() {
  return (
    <LegalShell
      kicker="Cookies"
      title="Política de Cookies"
      updated="Julho de 2026"
      intro="Cookies são pequenos arquivos guardados no seu navegador que ajudam o site a funcionar e a entender como ele é utilizado. Respeitamos a sua escolha: cookies de análise só são ativados após o seu consentimento no banner."
      sections={[
        {
          title: "Cookies essenciais",
          body: [
            "Necessários para o funcionamento básico do site, como lembrar a sua preferência de consentimento. Não podem ser desativados e não identificam você pessoalmente.",
          ],
        },
        {
          title: "Cookies de análise (opcionais)",
          body: [
            "Com o seu aceite, usamos ferramentas de análise (como Google Analytics 4) para entender de forma agregada e anônima como as pessoas navegam, o que nos ajuda a melhorar o site.",
            "Esses cookies só são carregados após você clicar em ‘Aceitar tudo’ no banner.",
          ],
        },
        {
          title: "Cookies de marketing (opcionais)",
          body: [
            "Podemos usar pixels (como o Meta Pixel) para medir campanhas, sempre condicionados ao seu consentimento. Enquanto você não aceitar, nenhum pixel de marketing é ativado.",
          ],
        },
        {
          title: "Como gerenciar",
          body: [
            "Você pode alterar ou revogar o consentimento a qualquer momento limpando os dados do site no seu navegador — o banner voltará a aparecer na próxima visita.",
            "Também é possível bloquear cookies nas configurações do seu navegador, embora isso possa afetar algumas funcionalidades.",
          ],
        },
      ]}
    />
  );
}
