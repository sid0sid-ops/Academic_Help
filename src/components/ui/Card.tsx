import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverLift?: boolean;
  glass?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverLift = true,
  glass = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "card",
        hoverLift ? "card-hover" : "",
        glass ? "glass-card" : "",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Card.displayName = "Card";
