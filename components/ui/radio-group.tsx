export function RadioGroup({
  name,
  options,
  defaultValue,
}: {
  name: string;
  options: { label: string; value: string }[];
  defaultValue?: string;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <label key={option.value} className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/35 px-4 py-3 text-sm text-slate-600">
          <input type="radio" name={name} value={option.value} defaultChecked={defaultValue === option.value} className="accent-emerald-300" />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}

