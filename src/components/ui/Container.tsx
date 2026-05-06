import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  const classes = `mx-auto w-full max-w-[1280px] px-6 md:px-8 ${className}`.trim();
  return <div className={classes}>{children}</div>;
}
