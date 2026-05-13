import { motion } from "framer-motion";
import { Sparkles, Scale, HeartHandshake, ShieldCheck } from "lucide-react";

const itens = [
  {
    icon: Sparkles,
    title: "Curadoria criteriosa",
    desc: "Cada produto é escolhido por sua origem, sabor e qualidade nutricional.",
  },
  {
    icon: Scale,
    title: "Vendas a granel",
    desc: "Compre na medida certa — menos desperdício, mais frescor e economia.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humano",
    desc: "Gente apaixonada por alimentação natural pronta para te orientar.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade premium",
    desc: "Marcas confiáveis, validade controlada e padrão sofisticado em tudo.",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-linen">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-primary">
            Por que Green Souk
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
            Um jeito <span className="italic text-primary">novo</span> de
            cuidar do que entra na sua despensa.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {itens.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl bg-background/60 p-7 border border-border/70"
            >
              <d.icon
                className="h-7 w-7 text-primary"
                strokeWidth={1.4}
              />
              <h3 className="mt-6 font-display text-xl text-foreground">
                {d.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
