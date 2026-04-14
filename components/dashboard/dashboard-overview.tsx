"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { createColumnHelper } from "@tanstack/react-table";
import { ProfitChart } from "@/components/charts/profit-chart";
import { PdfReportButton } from "@/components/data/pdf-report-button";
import { FileUpload } from "@/components/forms/file-upload";
import { InvoicePreview } from "@/components/invoice/invoice-preview";
import { DataTable } from "@/components/ui/data-table";
import { GlassCard } from "@/components/ui/glass-card";
import { SoftCarousel } from "@/components/ui/soft-carousel";
import { assetItems, cafeProfile, orders, staffMembers, summaryCards, supplyItems } from "@/data/mock";
import { formatRupiah } from "@/lib/utils";
import type { AssetItem, OrderItem, StaffMember, SupplyItem } from "@/types";

const orderColumn = createColumnHelper<OrderItem>();
const staffColumn = createColumnHelper<StaffMember>();
const supplyColumn = createColumnHelper<SupplyItem>();
const assetColumn = createColumnHelper<AssetItem>();

const orderColumns: ColumnDef<OrderItem, unknown>[] = [
  orderColumn.accessor("id", { header: "ID Order" }),
  orderColumn.accessor("table", { header: "Meja" }),
  orderColumn.accessor("customer", { header: "Pelanggan" }),
  orderColumn.accessor("status", {
    header: "Status",
    cell: (info) => (
      <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800/75 dark:text-slate-100">
        {info.getValue()}
      </span>
    ),
  }),
  orderColumn.accessor("total", {
    header: "Total",
    cell: (info) => formatRupiah(info.getValue()),
  }),
];

const staffColumns: ColumnDef<StaffMember, unknown>[] = [
  staffColumn.accessor("name", { header: "Nama" }),
  staffColumn.accessor("role", { header: "Posisi" }),
  staffColumn.accessor("attendance", { header: "Absensi" }),
  staffColumn.accessor("score", { header: "Skor" }),
  staffColumn.accessor("salary", {
    header: "Gaji",
    cell: (info) => formatRupiah(info.getValue()),
  }),
];

const supplyColumns: ColumnDef<SupplyItem, unknown>[] = [
  supplyColumn.accessor("name", { header: "Bahan" }),
  supplyColumn.accessor("stock", { header: "Stok" }),
  supplyColumn.accessor("unit", { header: "Unit" }),
  supplyColumn.accessor("threshold", { header: "Minimum" }),
];

const assetColumns: ColumnDef<AssetItem, unknown>[] = [
  assetColumn.accessor("name", { header: "Aset" }),
  assetColumn.accessor("category", { header: "Kategori" }),
  assetColumn.accessor("condition", { header: "Kondisi" }),
  assetColumn.accessor("assignedTo", { header: "Penempatan" }),
];

export default function DashboardOverview() {
  return (
    <>
      <section className="grid gap-4 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <GlassCard key={card.title} className={`bg-gradient-to-br ${card.tone} p-5`}>
            <p className="text-sm text-slate-500 dark:text-slate-300">{card.title}</p>
            <div className="mt-4 flex items-end justify-between gap-3">
              <p className="text-3xl font-semibold text-slate-700 dark:text-slate-100">{card.value}</p>
              <span className="rounded-full bg-white/50 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800/75 dark:text-slate-100">
                {card.change}
              </span>
            </div>
          </GlassCard>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <GlassCard>
          <ProfitChart />
        </GlassCard>
        <GlassCard>
          <SoftCarousel />
        </GlassCard>
      </section>

      <section id="laporan" className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <GlassCard className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-300">Pesanan terbaru</p>
              <h3 className="font-serif text-2xl font-semibold text-slate-700 dark:text-slate-100">
                Alur service yang sedang berjalan
              </h3>
            </div>
            <PdfReportButton />
          </div>
          <DataTable columns={orderColumns} data={orders} />
        </GlassCard>
        <InvoicePreview />
      </section>

      <section id="supply" className="grid gap-6 xl:grid-cols-2">
        <GlassCard className="space-y-4">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-300">Supply bahan</p>
            <h3 className="font-serif text-2xl font-semibold text-slate-700 dark:text-slate-100">
              Pantau stok minimum dan jadwal restock
            </h3>
          </div>
          <DataTable columns={supplyColumns} data={supplyItems} />
        </GlassCard>
        <GlassCard className="space-y-4" id="aset">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-300">Aset cafe</p>
            <h3 className="font-serif text-2xl font-semibold text-slate-700 dark:text-slate-100">
              Inventaris alat operasional
            </h3>
          </div>
          <DataTable columns={assetColumns} data={assetItems} />
        </GlassCard>
      </section>

      <section id="staff" className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="space-y-4">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-300">Manajemen staff</p>
            <h3 className="font-serif text-2xl font-semibold text-slate-700 dark:text-slate-100">
              Absensi, cuti, bonus bulanan, dan penilaian
            </h3>
          </div>
          <DataTable columns={staffColumns} data={staffMembers} />
        </GlassCard>
        <GlassCard className="space-y-4" id="dokumen">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-300">Identitas cafe</p>
            <h3 className="font-serif text-2xl font-semibold text-slate-700 dark:text-slate-100">
              Profil ringkas usaha
            </h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-2xl bg-white/30 px-4 py-3 text-sm text-slate-600 dark:bg-slate-900/30 dark:text-slate-300">
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-100">{cafeProfile.cafeName}</p>
                <p>{cafeProfile.branch} - {cafeProfile.openingHours}</p>
              </div>
              <span className="rounded-full bg-white/55 px-3 py-1 text-xs dark:bg-slate-800/70">
                {cafeProfile.taxStatus}
              </span>
            </div>
          </div>
          <FileUpload />
        </GlassCard>
      </section>
    </>
  );
}