import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "light" | "alt";
  id?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  variant = "light",
  id,
  className,
  children,
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        "section",
        variant === "light" ? "section-light" : "section-alt",
        className
      )}
      {...props}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

Section.displayName = "Section";
