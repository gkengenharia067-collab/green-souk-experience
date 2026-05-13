import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import {
  whatsLink,
  UNIDADE_PRINCIPAL,
  UNIDADE_SECUNDARIA,
} from "@/lib/whatsapp";

type Unidade = {
  nome: string;
  endereco: string;
  whatsapp: string;
  whatsappLabel: string;
  mapsQuery: string;
  mapsEmbed: string;
};

const unidades: Unidade[] = [
  {
    nome: "Antônio Maria Coelho",
    endereco: "R. Antônio Maria Coelho, 163 — Campo Grande/MS",
    whatsapp: UNIDADE_PRINCIPAL,
    whatsappLabel: "(67) 99977-9718",
    mapsQuery:
      "Green Souk Mercado Natural, R. Antônio Maria Coelho, 163, Campo Grande, MS",
    mapsEmbed:
      "https://www.google.com/maps?q=R.+Ant%C3%B4nio+Maria+Coelho,+163,+Campo+Grande,+MS&output=embed",
  },
  {
    nome: "Marquês de Lavradio",
    endereco: "R. Marquês de Lavradio, 626 — Campo Grande/MS",
    whatsapp: UNIDADE_SECUNDARIA,
    whatsappLabel: "(67) 98146-0154",
    mapsQuery:
      "Green Souk Mercado Natural, R. Marquês de Lavradio, 626, Campo Grande, MS",
    mapsEmbed:
      "https://www.google.com/maps?q=R.+Marqu%C3%AAs+de+Lavradio,+626,+Campo+Grande,+MS&output=embed",
  },
];

export const HORARIO = "Seg–Sex 8h às 18h30 · Sáb 8h às 13h";

export function Unidades() {
  return (
    <section id="unidades" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
              Onde nos encontrar
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
              Duas unidades em{" "}
              <span className="italic text-[color:var(--leaf-deep)]">
                Campo Grande
              </span>
              .
            </h2>
          </div>
          <p className="text-sm text-muted-foreground inline-flex items-center gap-2">
            <Clock className="h-4 w-4" /> {HORARIO}
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {unidades.map((u, i) => (
            <motion.article
              key={u.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl border border-border bg-background overflow-hidden hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_oklch(0.34_0.055_142_/_0.4)] transition-all"
            >
              <div className="aspect-[16/10] w-full bg-linen overflow-hidden border-b border-border">
                <iframe
                  title={`Mapa ${u.nome}`}
                  src={u.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full grayscale-[15%] contrast-[1.02]"
                />
              </div>

              <div className="p-7 md:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
                      Unidade {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-2xl md:text-3xl text-foreground leading-tight">
                      {u.nome}
                    </h3>
                  </div>
                </div>

                <div className="mt-7 space-y-3.5 text-sm text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{u.endereco}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{u.whatsappLabel}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{HORARIO}</span>
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={whatsLink("unidade_visita", u.whatsapp)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Falar no WhatsApp
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(u.mapsQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-cream transition-colors"
                  >
                    Como chegar
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalBusinessJsonLd() {
  const data = unidades.map((u) => ({
    "@context": "https://schema.org",
    "@type": "GroceryStore",
    name: `Green Souk Mercado Natural — ${u.nome}`,
    description:
      "Mercado natural em Campo Grande/MS com grãos, castanhas, cereais, farinhas, especiarias, granolas, suplementos e produtos naturais a granel.",
    address: {
      "@type": "PostalAddress",
      streetAddress: u.endereco.split(" — ")[0],
      addressLocality: "Campo Grande",
      addressRegion: "MS",
      addressCountry: "BR",
    },
    telephone: `+${u.whatsapp}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    areaServed: "Campo Grande, MS",
    sameAs: ["https://www.instagram.com/greensoukmercado/"],
  }));

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
