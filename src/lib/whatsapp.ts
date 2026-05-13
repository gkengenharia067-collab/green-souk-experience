// Centralized WhatsApp links with contextual pre-filled messages

export const UNIDADE_PRINCIPAL = "5567999779718"; // Antônio Maria Coelho
export const UNIDADE_SECUNDARIA = "5567981460154"; // Marquês de Lavradio

export type WhatsContext =
  | "geral"
  | "produtos_naturais"
  | "graos_cereais"
  | "suplementos"
  | "instagram"
  | "site_cta"
  | "unidade_visita";

const messages: Record<WhatsContext, string> = {
  geral: "Olá! Gostaria de falar com a Green Souk.",
  produtos_naturais:
    "Olá! Gostaria de conhecer os produtos naturais da Green Souk.",
  graos_cereais:
    "Olá! Tenho interesse nos grãos e cereais da Green Souk.",
  suplementos:
    "Olá! Gostaria de mais informações sobre os suplementos da Green Souk.",
  instagram: "Olá! Vim pelo Instagram da Green Souk.",
  site_cta:
    "Olá! Vim pelo site da Green Souk e gostaria de mais informações.",
  unidade_visita:
    "Olá! Gostaria de visitar a Green Souk e tenho algumas dúvidas.",
};

export function whatsLink(
  context: WhatsContext = "geral",
  phone: string = UNIDADE_PRINCIPAL,
) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(messages[context])}`;
}

export const DEV_WHATS =
  "https://wa.me/5567999222070?text=" +
  encodeURIComponent(
    "Olá Gabriel, vim através do site da Green Souk e gostaria de falar sobre um projeto.",
  );
