import { Leaf } from "lucide-react";

type Props = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * GREEN (verde escuro) + SOUK (branco/contraste)
 * variant: dark = sobre fundo claro (SOUK em foreground)
 *          light = sobre fundo escuro/primary (SOUK em branco)
 */
export function Logo({ variant = "dark", className = "" }: Props) {
  const souk = variant === "light" ? "text-primary-foreground" : "text-foreground";
  const greenColor = variant === "light" ? "text-primary-foreground/85" : "text-[color:var(--leaf-deep)]";
  const badgeBg = variant === "light" ? "bg-primary-foreground/15" : "bg-[color:var(--leaf-deep)]";
  const badgeFg = variant === "light" ? "text-primary-foreground" : "text-primary-foreground";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${badgeBg} ${badgeFg}`}
      >
        <Leaf className="h-4 w-4" strokeWidth={1.6} />
      </span>
      <span className="font-display text-lg tracking-tight leading-none">
        <span className={`font-semibold ${greenColor}`}>GREEN</span>
        <span className={`ml-1 italic ${souk}`}>Souk</span>
      </span>
    </span>
  );
}
