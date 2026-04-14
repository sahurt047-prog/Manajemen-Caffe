import { requireSession } from "@/lib/auth";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { orders } from "@/data/mock";
import { formatRupiah } from "@/lib/utils";

const flowSteps = ["Pramusaji", "Dapur", "Pramusaji", "Pelanggan"];

export default async function OrdersPage() {
  await requireSession();

  return (
    <DashboardShell>
      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <GlassCard className="space-y-4">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-300">Manajemen pesanan</p>
            <h1 className="font-serif text-3xl font-semibold text-slate-700 dark:text-slate-100">Flow layanan yang jelas untuk tim floor dan kitchen</h1>
          </div>
          <div className="grid gap-3">
            {flowSteps.map((step, index) => (
              <div key={step} className="rounded-2xl bg-white/30 p-4 dark:bg-slate-900/30">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Langkah {index + 1}</p>
                <p className="mt-2 text-lg font-semibold text-slate-700 dark:text-slate-100">{step}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Button>Tambahkan pesanan</Button>
            <Button variant="glass">Lihat invoice</Button>
          </div>
        </GlassCard>

        <div className="grid gap-4">
          {orders.map((order) => (
            <GlassCard key={order.id} className="space-y-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-serif text-2xl font-semibold text-slate-700 dark:text-slate-100">{order.id}</p>
                    <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800/75 dark:text-slate-100">{order.status}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{order.customer} • {order.table} • dibuat {order.createdAt}</p>
                </div>
                <p className="text-xl font-semibold text-slate-700 dark:text-slate-100">{formatRupiah(order.total)}</p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl bg-white/30 p-4 text-sm text-slate-600 dark:bg-slate-900/30 dark:text-slate-300">
                  <p className="text-slate-500 dark:text-slate-300">Pramusaji</p>
                  <p className="mt-1 font-medium text-slate-700 dark:text-slate-100">{order.waiter}</p>
                </div>
                <div className="rounded-2xl bg-white/30 p-4 text-sm text-slate-600 dark:bg-slate-900/30 dark:text-slate-300">
                  <p className="text-slate-500 dark:text-slate-300">Dapur</p>
                  <p className="mt-1 font-medium text-slate-700 dark:text-slate-100">{order.kitchen}</p>
                </div>
                <div className="rounded-2xl bg-white/30 p-4 text-sm text-slate-600 dark:bg-slate-900/30 dark:text-slate-300">
                  <p className="text-slate-500 dark:text-slate-300">Tahap akhir</p>
                  <p className="mt-1 font-medium text-slate-700 dark:text-slate-100">Antar ke pelanggan</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}

