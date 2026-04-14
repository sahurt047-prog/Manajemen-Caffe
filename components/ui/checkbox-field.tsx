export function CheckboxField({ label, defaultChecked = false }: { label: string; defaultChecked?: boolean }) {
  return (
    <label className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/35 px-4 py-3 text-sm text-slate-600">
      <input type="checkbox" defaultChecked={defaultChecked} className="h-4 w-4 rounded border-white/40 accent-sky-300" />
      <span>{label}</span>
    </label>
  );
}

