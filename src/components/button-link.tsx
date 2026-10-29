import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverted";
  size?: "sm" | "md";
};

const variants = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  secondary: "border border-ink/20 text-ink hover:border-ink/50",
  inverted: "border border-paper/25 text-paper hover:border-paper/60",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
};

export function ButtonLink({ href, children, variant = "primary", size = "md" }: Props) {
  const className = `inline-flex items-center justify-center font-medium transition-colors ${variants[variant]} ${sizes[size]}`;
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
