import { formatRupiah } from "@/lib/utils";

export function InvoicePreview() {
  return (
    <div className="glass-card max-w-xl space-y-5 p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-serif text-3xl font-semibold text-slate-700">CafeFlow Invoice</p>
          <p className="text-sm text-slate-500">INV-APR-2026-021</p>
        </div>
        <div className="text-right text-sm text-slate-500">
          <p>13 April 2026</p>
          <p>Dine in - Indoor 05</p>
        </div>
      </div>
      <div className="space-y-3 rounded-2xl bg-white/25 p-4 text-sm text-slate-600">
        <div className="flex justify-between">
          <span>Cloud Latte x2</span>
          <span>{formatRupiah(64000)}</span>
        </div>
        <div className="flex justify-between">
          <span>Pandan Cream Toast x1</span>
          <span>{formatRupiah(28000)}</span>
        </div>
        <div className="flex justify-between">
          <span>Service & tax</span>
          <span>{formatRupiah(32000)}</span>
        </div>
      </div>
      <div className="flex justify-between text-lg font-semibold text-slate-700">
        <span>Total</span>
        <span>{formatRupiah(124000)}</span>
      </div>
    </div>
  );
}

