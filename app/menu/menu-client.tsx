"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ColumnDef } from "@tanstack/react-table";
import { createColumnHelper } from "@tanstack/react-table";
import { FileUpload } from "@/components/forms/file-upload";
import { ImageUpload } from "@/components/forms/image-upload";
import { MenuForm } from "@/components/forms/menu-form";
import { ZoomableImage } from "@/components/forms/zoomable-image";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { GlassCard } from "@/components/ui/glass-card";
import { Modal } from "@/components/ui/modal";
import { menuItems } from "@/data/mock";
import { formatRupiah } from "@/lib/utils";
import type { MenuItem } from "@/types";

const columnHelper = createColumnHelper<MenuItem>();

export default function MenuClientPage() {
  const [open, setOpen] = useState(false);
  const columns = useMemo<ColumnDef<MenuItem, any>[]>(
    () => [
      columnHelper.accessor("name", {
        header: "Menu",
        cell: (info) => (
          <div className="flex items-center gap-3">
            <Image src={info.row.original.image} alt={info.getValue()} width={56} height={56} className="h-14 w-14 rounded-2xl object-cover" />
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-100">{info.getValue()}</p>
              <p className="text-xs text-slate-500 dark:text-slate-300">{info.row.original.id}</p>
            </div>
          </div>
        ),
      }),
      columnHelper.accessor("category", { header: "Kategori" }),
      columnHelper.accessor("price", { header: "Harga", cell: (info) => formatRupiah(info.getValue()) }),
      columnHelper.accessor("stock", { header: "Stok" }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800/75 dark:text-slate-100">{info.getValue()}</span>,
      }),
    ],
    []
  );

  return (
    <>
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="space-y-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-300">Manajemen menu</p>
              <h1 className="font-serif text-3xl font-semibold text-slate-700 dark:text-slate-100">Menu reguler, diskon, dan spesial event</h1>
            </div>
            <Button onClick={() => setOpen(true)}>Tambah Menu</Button>
          </div>
          <DataTable columns={columns} data={menuItems} />
        </GlassCard>

        <div className="space-y-6">
          <GlassCard className="space-y-4">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-300">Promo aktif</p>
              <h2 className="font-serif text-2xl font-semibold text-slate-700 dark:text-slate-100">Hero menu untuk campaign mingguan</h2>
            </div>
            <ZoomableImage src={menuItems[0].image} alt={menuItems[0].name} />
            <div className="rounded-2xl bg-white/30 p-4 text-sm text-slate-600 dark:bg-slate-900/30 dark:text-slate-300">
              <p className="font-medium text-slate-700 dark:text-slate-100">Diskon weekday 20%</p>
              <p>Berlaku untuk signature coffee pukul 08.00 - 11.00.</p>
            </div>
          </GlassCard>
          <GlassCard className="space-y-4">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-300">Asset upload</p>
              <h2 className="font-serif text-2xl font-semibold text-slate-700 dark:text-slate-100">Gambar menu dan file promosi</h2>
            </div>
            <ImageUpload />
            <FileUpload />
          </GlassCard>
        </div>
      </section>

      <Modal open={open} title="Tambah Menu Baru" onClose={() => setOpen(false)}>
        <MenuForm />
      </Modal>
    </>
  );
}

