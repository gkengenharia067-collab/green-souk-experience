import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import { PhotoSlot } from "./PhotoSlot";
import { whatsLink } from "@/lib/whatsapp";

export function InstagramGrid() {
  return (
    <section className="py-24 md:py-32">
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
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-cream transition-colors"
            >
              <Instagram className="h-4 w-4" />
              Ver no Instagram
            </a>
            <a
              href={whatsLink("instagram")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Vim pelo Instagram
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/greensoukmercado/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="block hover:opacity-90 transition-opacity"
            >
              <PhotoSlot
                ratio="aspect-square"
                tone={i % 2 === 0 ? "leaf" : "clay"}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
