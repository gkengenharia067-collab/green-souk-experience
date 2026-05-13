import { motion } from "framer-motion";
import {
  Wheat,
  Nut,
  CroissantIcon,
  Soup,
  Flower2,
  Cookie,
  Leaf,
  Pill,
} from "lucide-react";

const categorias = [
  { icon: Wheat, name: "Grãos", desc: "Arroz, feijão, lentilha, grão-de-bico" },
  { icon: Nut, name: "Castanhas", desc: "Pará, caju, amêndoas, nozes, pistache" },
  { icon: Soup, name: "Cereais", desc: "Aveia, quinoa, amaranto, chia, linhaça" },
  { icon: CroissantIcon, name: "Farinhas", desc: "Integrais, sem glúten, especiais" },
  { icon: Flower2, name: "Especiarias", desc: "Curcumas, pimentas, ervas, sais" },
  { icon: Cookie, name: "Granolas", desc: "Sem açúcar, artesanais, mix de frutas" },
  { icon: Leaf, name: "Chás & Infusões", desc: "Naturais, funcionais, relaxantes" },
  { icon: Pill, name: "Suplementos naturais", desc: "Proteínas, superfoods, ômegas" },
];

export function Categorias() {
  return (
    <section id="categorias" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-primary">
            O que oferecemos
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
            Categorias <span className="italic text-primary">selecionadas</span>{" "}
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
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-[0_20px_40px_-25px_oklch(0.38_0.055_135_/_0.35)] transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <c.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">
                {c.name}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
