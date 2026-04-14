"use client";

import { useEffect, useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { GlassCard } from "@/components/ui/glass-card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatRupiah } from "@/lib/utils";
import type { StaffMember } from "@/types";

const columnHelper = createColumnHelper<StaffMember>();

export function StaffOverview() {
  const [data, setData] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/staff")
      .then((response) => response.json())
      .then((payload: { data: StaffMember[] }) => setData(payload.data))
      .finally(() => setLoading(false));
  }, []);

  const columns = useMemo<ColumnDef<StaffMember, any>[]>(
    () => [
      columnHelper.accessor("name", { header: "Nama" }),
      columnHelper.accessor("role", { header: "Posisi" }),
      columnHelper.accessor("shift", { header: "Shift" }),
      columnHelper.accessor("attendance", { header: "Absensi" }),
      columnHelper.accessor("leaveBalance", { header: "Cuti tersisa" }),
      columnHelper.accessor("bonus", { header: "Bonus", cell: (info) => formatRupiah(info.getValue()) }),
      columnHelper.accessor("salary", { header: "Gaji", cell: (info) => formatRupiah(info.getValue()) }),
    ],
    []
  );

  const topStaff = data[0];

  return (
    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <GlassCard className="space-y-4">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-300">Data staff</p>
          <h2 className="font-serif text-3xl font-semibold text-slate-700 dark:text-slate-100">Absensi, cuti, bonus, dan penggajian</h2>
        </div>
        {loading ? <Skeleton className="h-72 w-full" /> : <DataTable columns={columns} data={data} />}
      </GlassCard>
      <div className="space-y-6">
        <GlassCard className="space-y-4">
          <p className="text-sm text-slate-500 dark:text-slate-300">Performa bulanan</p>
          {loading ? (
            <Skeleton className="h-48 w-full" />
          ) : topStaff ? (
            <div className="space-y-3">
              <div className="rounded-2xl bg-white/30 p-4 dark:bg-slate-900/30">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Top rating</p>
                <p className="mt-2 text-2xl font-semibold text-slate-700 dark:text-slate-100">{topStaff.name}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{topStaff.monthlyReview}</p>
              </div>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-2xl bg-white/30 p-4 dark:bg-slate-900/30">
                  <p className="text-sm text-slate-500 dark:text-slate-300">Skor layanan</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-700 dark:text-slate-100">{topStaff.score}</p>
                </div>
                <div className="rounded-2xl bg-white/30 p-4 dark:bg-slate-900/30">
                  <p className="text-sm text-slate-500 dark:text-slate-300">Bonus bulan ini</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-700 dark:text-slate-100">{formatRupiah(topStaff.bonus)}</p>
                </div>
              </div>
            </div>
          ) : null}
        </GlassCard>
        <GlassCard className="space-y-4">
          <p className="text-sm text-slate-500 dark:text-slate-300">Rekrutmen</p>
          <div className="rounded-2xl bg-white/30 p-4 text-sm text-slate-600 dark:bg-slate-900/30 dark:text-slate-300">
            <p className="font-medium text-slate-700 dark:text-slate-100">3 kandidat aktif</p>
            <p className="mt-2">1 barista senior, 1 pastry helper, 1 pramusaji part-time sedang dalam tahap interview akhir.</p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

