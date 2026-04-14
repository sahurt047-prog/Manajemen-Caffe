import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
};

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <section className={cn("glass-card p-5", className)} {...props}>
      {children}
    </section>
  );
}
