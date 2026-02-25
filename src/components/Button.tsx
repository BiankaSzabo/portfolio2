import type { ReactNode } from "react";
import { Link } from "react-router";

interface ButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline";
  href?: string;
  to?: string;
  type?: "button" | "submit";
  target?: string;
  className?: string;
}

const base =
  "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all";

const variantStyles = {
  solid:
    "bg-primary text-primary-foreground hover:brightness-110 hover:shadow-md",
  outline:
    "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
};

export default function Button({
  children,
  variant = "solid",
  href,
  to,
  type = "button",
  target,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
