import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: "pdf" | "pptx" | "accent" | "general";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  type = "general",
  className,
  children,
  ...props
}) => {
  const badgeClass = type === "pdf"
    ? "badge-pdf"
    : type === "pptx"
      ? "badge-pptx"
      : type === "accent"
        ? "badge-accent"
        : "";

  return (
    <span className={cn("badge", badgeClass, className)} {...props}>
      {children}
    </span>
  );
};

Badge.displayName = "Badge";
