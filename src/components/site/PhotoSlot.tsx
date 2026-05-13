import { Leaf } from "lucide-react";

type Props = {
  label?: string;
  tone?: "leaf" | "clay" | "linen" | "cream";
  className?: string;
  ratio?: string; // e.g. "aspect-[4/5]"
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  leaf: "from-[color:var(--leaf-deep)]/25 via-[color:var(--leaf)]/15 to-[color:var(--cream)]",
  clay: "from-[color:var(--clay)]/30 via-[color:var(--linen)] to-[color:var(--leaf)]/15",
  linen: "from-[color:var(--linen)] via-[color:var(--cream)] to-[color:var(--leaf)]/12",
  cream: "from-[color:var(--cream)] to-[color:var(--leaf)]/10",
};

/**
 * Elegant branded photo slot — used until real Green Souk photos
 * are uploaded. Looks intentional, not "missing image".
 */
export function PhotoSlot({ label, tone = "leaf", className = "", ratio = "" }: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-gradient-to-br ${tones[tone]} ${ratio} ${className}`}
    >
      {/* organic grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.3 0.04 60) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
        aria-hidden
      />
      {/* floating leaf monogram */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center text-[color:var(--leaf-deep)]/45">
          <Leaf className="h-10 w-10" strokeWidth={1.2} />
          {label && (
            <span className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[color:var(--leaf-deep)]/55">
              {label}
            </span>
          )}
        </div>
      </div>
      {/* corner mark */}
      <span className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.3em] text-[color:var(--leaf-deep)]/55">
        Green · Souk
      </span>
    </div>
  );
}
