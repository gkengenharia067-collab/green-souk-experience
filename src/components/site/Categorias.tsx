import { motion } from "framer-motion";
import {
  Wheat,
  Nut,
  Soup,
  Croissant,
  Flower2,
  Cookie,
  Leaf,
  Pill,
  ArrowUpRight,
} from "lucide-react";
import { whatsLink, type WhatsContext } from "@/lib/whatsapp";

const categorias: {
  icon: typeof Wheat;
  name: string;
  desc: string;
  context: WhatsContext;
}[] = [
  { icon: Wheat, name: "Grãos", desc: "Arroz, feijão, lentilha, grão-de-bico", context: "graos_cereais" },
  { icon: Nut, name: "Castanhas", desc: "Pará, caju, amêndoas, nozes, pistache", context: "produtos_naturais" },
  { icon: Soup, name: "Cereais & Sementes", desc: "Aveia, quinoa, chia, linhaça", context: "graos_cereais" },
  { icon: Croissant, name: "Farinhas", desc: "Integrais, sem glúten, especiais", context: "produtos_naturais" },
  { icon: Flower2, name: "Especiarias", desc: "Cúrcuma, pimentas, ervas, sais", context: "produtos_naturais" },
  { icon: Cookie, name: "Granolas & Mix", desc: "Sem açúcar, artesanais, frutas", context: "produtos_naturais" },
  { icon: Leaf, name: "Chás & Pós Naturais", desc: "Funcionais, infusões, naturais", context: "produtos_naturais" },
  { icon: Pill, name: "Suplementos Naturais", desc: "Proteínas, superfoods, ômegas", context: "suplementos" },
];

export function Categorias() {
  return (
    <section id="categorias" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
            O que oferecemos
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
            Categorias{" "}
            <span className="italic text-[color:var(--leaf-deep)]">
              selecionadas
            </span>{" "}
            com curadoria.
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg">
            Mais de 200 itens naturais organizados para você encontrar com
            facilidade — do básico do dia a dia ao especial que faz a
            diferença.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {categorias.map((c, i) => (
            <motion.a
              key={c.name}
              href={whatsLink(c.context)}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_22px_44px_-25px_oklch(0.34_0.055_142_/_0.4)] transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="h-11 w-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <c.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all -translate-x-1 group-hover:translate-x-0" />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">
                {c.name}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
