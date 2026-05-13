import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const depoimentos = [
  {
    nome: "Mariana A.",
    local: "Campo Grande/MS",
    texto:
      "Encontrei finalmente um mercado natural com curadoria de verdade. Os grãos a granel são impecáveis e o atendimento é um carinho.",
  },
  {
    nome: "Rafael S.",
    local: "Cliente desde 2024",
    texto:
      "Loja linda, organizada e com produtos que fazem diferença na rotina. Virei cliente fiel — passo toda semana.",
  },
  {
    nome: "Camila T.",
    local: "Campo Grande/MS",
    texto:
      "Variedade incrível de castanhas, granolas e especiarias. Dá para sentir o cuidado em tudo — do produto ao ambiente.",
  },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-linen">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
            Quem prova, recomenda
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
            Histórias de quem faz parte da{" "}
            <span className="italic text-[color:var(--leaf-deep)]">
              Green Souk
            </span>
            .
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {depoimentos.map((d, i) => (
            <motion.figure
              key={d.nome}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl bg-background border border-border p-7 md:p-8 hover:border-primary/30 hover:shadow-[0_22px_44px_-26px_oklch(0.34_0.055_142_/_0.35)] transition-all"
            >
              <Quote className="h-7 w-7 text-primary/30" strokeWidth={1.5} />
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">
                "{d.texto}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
                <div>
                  <p className="font-display text-base text-foreground">
                    {d.nome}
                  </p>
                  <p className="text-xs text-muted-foreground">{d.local}</p>
                </div>
                <div className="flex gap-0.5 text-clay">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
