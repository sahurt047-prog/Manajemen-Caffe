"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/lib/utils";
import jsPDF from "jspdf";

export function PdfReportButton() {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const pdf = new jsPDF();
    pdf.setFontSize(18);
    pdf.text("CafeFlow - Ringkasan Laporan", 14, 20);
    pdf.setFontSize(12);
    pdf.text(`Pendapatan hari ini: ${formatRupiah(8450000)}`, 14, 32);
    pdf.text(`Pesanan aktif: 24`, 14, 42);
    pdf.text(`Skor layanan: 4.8 / 5`, 14, 52);
    pdf.save("laporan-cafeflow.pdf");
    setLoading(false);
  };

  return <Button onClick={handleGenerate}>{loading ? "Menyiapkan PDF..." : "Unduh Laporan PDF"}</Button>;
}

