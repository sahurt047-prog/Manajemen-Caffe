"use client";

export function FileUpload() {
  return (
    <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/40 bg-white/20 px-4 py-6 text-center text-sm text-slate-600 transition hover:bg-white/35">
      <span className="font-medium">Upload dokumen cafe</span>
      <span>NIB, NPWP, sertifikat usaha, atau kontrak vendor</span>
      <input type="file" className="hidden" multiple />
    </label>
  );
}

