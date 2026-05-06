import type { ReactNode } from "react";

interface TechBadgeProps {
  children: ReactNode;
  className?: string;
}

export function TechBadge({ children, className = "" }: TechBadgeProps) {
  const classes =
    `inline-flex items-center rounded-lg bg-badge px-2 py-0.5 text-xs font-medium text-primary ${className}`.trim();
  return <span className={classes}>{children}</span>;
}
