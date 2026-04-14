"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/components/providers/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-2xl border border-white/35 bg-white/45 px-4 py-3 text-sm text-slate-600 transition hover:bg-white/60 dark:border-white/10 dark:bg-slate-900/45 dark:text-slate-200"
    >
      <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} className="h-4 w-4" />
      <span>{theme === "light" ? "Dark glass" : "Light glass"}</span>
    </button>
  );
}

