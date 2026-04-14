import { getSession } from "@/lib/auth";
import { LogoutButton } from "@/components/layout/logout-button";

export async function SessionPanel() {
  const session = await getSession();

  if (!session) return null;

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/35 bg-white/40 px-4 py-3 text-sm text-slate-600 shadow-sm backdrop-blur-lg dark:border-white/10 dark:bg-slate-900/45 dark:text-slate-200">
      <div>
        <p className="font-medium text-slate-700 dark:text-slate-100">{session.name}</p>
        <p className="text-xs text-slate-500 dark:text-slate-300">{session.role} • {session.email}</p>
      </div>
      <LogoutButton />
    </div>
  );
}

