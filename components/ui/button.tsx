import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "soft" | "glass" | "ghost";
};

export function Button({ className, variant = "soft", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium transition duration-200",
        variant === "soft" && "bg-sky-soft/70 text-slate-700 hover:bg-sky-soft/90",
        variant === "glass" && "border border-white/35 bg-white/45 text-slate-700 shadow-sm backdrop-blur-lg hover:bg-white/60",
        variant === "ghost" && "text-slate-600 hover:bg-white/45",
        className
      )}
      {...props}
    />
  );
}

