import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

type Unidade = {
  nome: string;
  endereco: string;
  whatsappDigits: string;
  whatsappLabel: string;
  mapsQuery: string;
};

const unidades: Unidade[] = [
  {
    nome: "Unidade Antônio Maria Coelho",
    endereco: "R. Antônio Maria Coelho, 163 — Campo Grande/MS",
    whatsappDigits: "5567999779718",
    whatsappLabel: "(67) 99977-9718",
    mapsQuery: "Green Souk Mercado Natural, R. Antônio Maria Coelho, 163, Campo Grande, MS",
  },
  {
    nome: "Unidade Marquês de Lavradio",
    endereco: "R. Marquês de Lavradio, 626 — Campo Grande/MS",
    whatsappDigits: "5567981460154",
    whatsappLabel: "(67) 98146-0154",
    mapsQuery: "Green Souk Mercado Natural, R. Marquês de Lavradio, 626, Campo Grande, MS",
  },
];

const horario = "Seg–Sex 8h às 18h30 · Sáb 8h às 13h";

export function Unidades() {
  return (
    <section id="unidades" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-primary">
              Onde nos encontrar
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
              Duas unidades em{" "}
              <span className="italic text-primary">Campo Grande</span>.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground inline-flex items-center gap-2">
            <Clock className="h-4 w-4" /> {horario}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {unidades.map((u, i) => (
            <motion.article
              key={u.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-border bg-background p-8 md:p-10 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_oklch(0.38_0.055_135_/_0.35)] transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl md:text-3xl text-foreground leading-tight">
                  {u.nome}
                </h3>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/8 text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-8 space-y-4 text-sm text-muted-foreground">
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
                  <span>{horario}</span>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${u.whatsappDigits}?text=${encodeURIComponent(
                    "Olá, Green Souk! Gostaria de saber mais sobre os produtos.",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Falar no WhatsApp
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    u.mapsQuery,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-cream transition-colors"
                >
                  Como chegar
                  <ArrowUpRight className="h-4 w-4" />
                </a>
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
    name: `Green Souk Mercado Natural — ${u.nome.replace("Unidade ", "")}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: u.endereco.split(" — ")[0],
      addressLocality: "Campo Grande",
      addressRegion: "MS",
      addressCountry: "BR",
    },
    telephone: `+${u.whatsappDigits}`,
    openingHours: ["Mo-Fr 08:00-18:30", "Sa 08:00-13:00"],
  }));

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
