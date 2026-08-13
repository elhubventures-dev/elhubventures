import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
};

const variants = {
  primary: "bg-gold text-[#fffcf7] hover:bg-[#fffcf7] hover:text-[#12151c]",
  secondary:
    "border border-ink text-ink hover:bg-ink hover:text-paper",
  inverse:
    "border border-[#fffcf7] text-[#fffcf7] hover:bg-[#fffcf7] hover:text-[#12151c]",
  ghost: "text-ink hover:text-gold",
};

export function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  className = "",
  onClick,
  disabled,
  external,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition duration-150 disabled:opacity-60 ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
