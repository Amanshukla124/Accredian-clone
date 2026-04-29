import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  loading?: boolean;
  className?: string;
}

type ButtonProps = BaseProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

const variantClasses: Record<ButtonVariant, string> = {
  primary:  "btn btn-primary",
  secondary:"btn btn-ghost",
  outline:  "btn !border-[var(--border)] !text-[var(--ink-muted)] hover:!border-[var(--ink)] hover:!text-[var(--ink)]",
  ghost:    "btn !bg-transparent !border-transparent !text-[var(--ink-muted)] hover:!text-[var(--ink)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "!text-xs !px-4 !py-2",
  md: "!text-sm !px-5 !py-2.5",
  lg: "!text-[15px] !px-6 !py-3.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  loading = false,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {loading ? <Spinner /> : children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} disabled={loading} {...buttonProps}>
      {loading ? <Spinner /> : children}
    </button>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
