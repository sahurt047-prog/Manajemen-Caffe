import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SessionPanel } from "@/components/layout/session-panel";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export async function Topbar() {
  return (
    <div className="glass-card flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-300">Selamat datang kembali</p>
        <h2 className="font-serif text-3xl font-semibold text-slate-700 dark:text-slate-100">Kontrol operasional cafe dalam satu layar</h2>
      </div>
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
        <label className="flex items-center gap-3 rounded-2xl border border-white/35 bg-white/45 px-4 py-3 text-slate-500 shadow-sm backdrop-blur-lg dark:border-white/10 dark:bg-slate-900/45 dark:text-slate-300">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="h-4 w-4" />
          <input
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 sm:w-56 dark:placeholder:text-slate-500"
            placeholder="Cari menu, staff, pesanan..."
          />
        </label>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="inline-flex items-center justify-center rounded-2xl border border-white/35 bg-white/45 p-3 text-slate-600 transition hover:bg-white/60 dark:border-white/10 dark:bg-slate-900/45 dark:text-slate-200">
            <FontAwesomeIcon icon={faBell} className="h-4 w-4" />
          </button>
          <SessionPanel />
        </div>
      </div>
    </div>
  );
}

