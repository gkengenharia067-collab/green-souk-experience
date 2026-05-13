import { motion } from "framer-motion";
import {
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Salad,
  Apple,
  Sofa,
} from "lucide-react";

const itens = [
  {
    icon: Sparkles,
    title: "Produtos selecionados",
    desc: "Curadoria criteriosa: escolhemos cada item por origem, sabor e qualidade.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento acolhedor",
    desc: "Gente apaixonada por alimentação natural pronta para te orientar com calma.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade e procedência",
    desc: "Marcas confiáveis, validade controlada e padrão sofisticado em tudo.",
  },
  {
    icon: Salad,
    title: "Variedade natural",
    desc: "Grãos, castanhas, granolas, especiarias, suplementos e muito mais a granel.",
  },
  {
    icon: Apple,
    title: "Alimentação saudável",
    desc: "Itens funcionais, integrais, sem açúcar e opções para todas as rotinas.",
  },
  {
    icon: Sofa,
    title: "Ambiente moderno",
    desc: "Lojas clean, organizadas e acolhedoras — uma experiência completa.",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-linen">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
            Por que Green Souk
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
            Por que escolher a{" "}
            <span className="italic text-[color:var(--leaf-deep)]">
              Green Souk
            </span>
            ?
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg">
            Mais do que um mercado: um jeito novo, sofisticado e sincero
            de cuidar do que entra na sua despensa.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {itens.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl bg-background/70 backdrop-blur p-7 md:p-8 border border-border/70 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_22px_44px_-26px_oklch(0.34_0.055_142_/_0.4)] transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <d.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
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
