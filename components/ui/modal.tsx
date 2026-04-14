"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, title, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 p-4 backdrop-blur-md">
      <div className={cn("glass-panel w-full max-w-2xl p-6")}>
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-serif text-3xl font-semibold text-slate-700">{title}</h3>
          <button onClick={onClose} className="rounded-2xl bg-white/40 px-3 py-2 text-sm text-slate-500 hover:bg-white/60">
            Tutup
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

