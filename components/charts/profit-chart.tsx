"use client";

import { useMemo, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Filler, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { salesSeries } from "@/data/mock";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Filler, Tooltip, Legend);

export function ProfitChart() {
  const [range, setRange] = useState("7d");

  const chartData = useMemo(
    () => ({
      labels: salesSeries.map((item) => item.label),
      datasets: [
        {
          label: "Pendapatan",
          data: salesSeries.map((item) => item.revenue),
          borderColor: "rgba(96, 165, 250, 0.9)",
          backgroundColor: "rgba(191, 216, 238, 0.35)",
          fill: true,
          tension: 0.4,
        },
        {
          label: "Pengeluaran",
          data: salesSeries.map((item) => item.expense),
          borderColor: "rgba(52, 211, 153, 0.9)",
          backgroundColor: "rgba(207, 231, 214, 0.2)",
          fill: true,
          tension: 0.4,
        },
      ],
    }),
    []
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Grafik penjualan</p>
          <h3 className="font-serif text-2xl font-semibold text-slate-700">Untung vs rugi</h3>
        </div>
        <select value={range} onChange={(event) => setRange(event.target.value)} className="rounded-2xl border border-white/35 bg-white/40 px-4 py-2 text-sm text-slate-600 outline-none">
          <option value="7d">7 hari</option>
          <option value="30d">30 hari</option>
          <option value="90d">90 hari</option>
        </select>
      </div>
      <div className="h-[320px] rounded-2xl bg-white/15 p-3">
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false,
            plugins: { legend: { position: "bottom" } },
            scales: {
              y: {
                ticks: {
                  callback: (value) => `Rp ${value} jt`,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

