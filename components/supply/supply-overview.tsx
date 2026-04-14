"use client";

import { useEffect, useMemo, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { GlassCard } from "@/components/ui/glass-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { SupplyItem } from "@/types";

const columnHelper = createColumnHelper<SupplyItem>();

export function SupplyOverview() {
  const [data, setData] = useState<SupplyItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/supply")
      .then((response) => response.json())
      .then((payload: { data: SupplyItem[] }) => setData(payload.data))
      .finally(() => setLoading(false));
  }, []);

  const lowStockCount = data.filter((item) => item.stock <= item.threshold).length;
  const columns = useMemo(
    () => [
      columnHelper.accessor("name", { header: "Bahan" }),
      columnHelper.accessor("stock", { header: "Stok" }),
      columnHelper.accessor("unit", { header: "Unit" }),
      columnHelper.accessor("threshold", { header: "Min." }),
      columnHelper.accessor("vendor", { header: "Vendor" }),
      columnHelper.accessor("eta", { header: "ETA" }),
    ],
    []
  );

  return (
    <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <GlassCard className="space-y-4">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-300">Supply bahan</p>
          <h2 className="font-serif text-3xl font-semibold text-slate-700 dark:text-slate-100">Restock, vendor, dan stok minimum</h2>
        </div>
        {loading ? <Skeleton className="h-72 w-full" /> : <DataTable columns={columns} data={data} />}
      </GlassCard>
      <div className="space-y-6">
        <GlassCard className="space-y-4">
          <p className="text-sm text-slate-500 dark:text-slate-300">Supply alert</p>
          {loading ? (
            <Skeleton className="h-48 w-full" />
          ) : (
            <div className="space-y-3">
              <div className="rounded-2xl bg-white/30 p-4 dark:bg-slate-900/30">
                <p className="text-sm text-slate-500 dark:text-slate-300">Item butuh restock</p>
                <p className="mt-2 text-4xl font-semibold text-slate-700 dark:text-slate-100">{lowStockCount}</p>
              </div>
              {data.filter((item) => item.stock <= item.threshold).map((item) => (
                <div key={item.id} className="rounded-2xl bg-white/30 p-4 text-sm text-slate-600 dark:bg-slate-900/30 dark:text-slate-300">
                  <p className="font-medium text-slate-700 dark:text-slate-100">{item.name}</p>
                  <p className="mt-1">Vendor: {item.vendor}</p>
                  <p>ETA restock: {item.eta}</p>
                </div>
              ))}
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}

