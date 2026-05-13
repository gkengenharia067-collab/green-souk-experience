import { Instagram } from "lucide-react";

export function InstagramGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-primary">
              @greensouk
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-foreground">
              Siga nosso <span className="italic text-primary">cotidiano</span>.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Instagram className="h-4 w-4" />
            Ver no Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-leaf/15 via-cream to-clay/20 border border-border"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Post {i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
