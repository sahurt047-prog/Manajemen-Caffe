"use client";

import { useEffect, useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Skeleton } from "@/components/ui/skeleton";
import { ProfitChart } from "@/components/charts/profit-chart";
import { PdfReportButton } from "@/components/data/pdf-report-button";
import { formatRupiah } from "@/lib/utils";
import type { ReportSummary } from "@/types";

export function ReportOverview() {
  const [summary, setSummary] = useState<ReportSummary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reports/summary")
      .then((response) => response.json())
      .then((payload: { summary: ReportSummary }) => setSummary(payload.summary))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 xl:grid-cols-4">
        {loading || !summary
          ? Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} className="h-28 w-full" />)
          : [
              { label: "Revenue", value: formatRupiah(summary.grossRevenue) },
              { label: "Expense", value: formatRupiah(summary.totalExpense) },
              { label: "Net profit", value: formatRupiah(summary.netProfit) },
              { label: "Average bill", value: formatRupiah(summary.averageOrderValue) },
            ].map((item) => (
              <GlassCard key={item.label} className="space-y-2">
                <p className="text-sm text-slate-500 dark:text-slate-300">{item.label}</p>
                <p className="text-3xl font-semibold text-slate-700 dark:text-slate-100">{item.value}</p>
              </GlassCard>
            ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <GlassCard>
          <ProfitChart />
        </GlassCard>
        <GlassCard className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-300">Export laporan</p>
              <h2 className="font-serif text-2xl font-semibold text-slate-700 dark:text-slate-100">Rekap penjualan</h2>
            </div>
            <PdfReportButton />
          </div>
          {loading || !summary ? (
            <Skeleton className="h-44 w-full" />
          ) : (
            <div className="space-y-3 rounded-2xl bg-white/30 p-4 text-sm text-slate-600 dark:bg-slate-900/30 dark:text-slate-300">
              <p><span className="font-medium text-slate-700 dark:text-slate-100">Periode:</span> {summary.periodLabel}</p>
              <p><span className="font-medium text-slate-700 dark:text-slate-100">Menu terlaris:</span> {summary.topSellingMenu}</p>
              <p><span className="font-medium text-slate-700 dark:text-slate-100">Margin:</span> {Math.round((summary.netProfit / summary.grossRevenue) * 100)}%</p>
              <p>Data ini berasal dari route handler ringan `app/api/reports/summary` agar mudah diganti ke database nanti.</p>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}

