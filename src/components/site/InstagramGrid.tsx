import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import { whatsLink } from "@/lib/whatsapp";
import img1 from "@/assets/greensouk/lifestyle-1.jpg";
import img2 from "@/assets/greensouk/interior-graneis.jpg";
import img3 from "@/assets/greensouk/granel-maos.jpg";
import img4 from "@/assets/greensouk/castanhas-close.jpg";
import img5 from "@/assets/greensouk/produtos-selecionados.jpg";
import img6 from "@/assets/greensouk/superfoods-flatlay.jpg";

const photos = [
  { src: img1, alt: "Fachada Green Souk" },
  { src: img2, alt: "Interior com prateleiras de grãos" },
  { src: img3, alt: "Granel sendo servido" },
  { src: img4, alt: "Castanhas e frutas secas" },
  { src: img5, alt: "Cesta de produtos selecionados" },
  { src: img6, alt: "Superfoods e especiarias" },
];

export function InstagramGrid() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
              @greensoukmercado
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-foreground">
              Siga nosso{" "}
              <span className="italic text-[color:var(--leaf-deep)]">
                cotidiano
              </span>
              .
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/greensoukmercado/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-cream transition-colors"
            >
              <Instagram className="h-4 w-4" />
              Ver no Instagram
            </a>
            <a
              href={whatsLink("instagram")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Vim pelo Instagram
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {photos.map((p, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/greensoukmercado/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group block overflow-hidden rounded-2xl border border-border/70"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
