"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MetisMenu from "metismenujs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesPacking,
  faClipboardList,
  faFileInvoiceDollar,
  faIdCard,
  faMugHot,
  faPeopleGroup,
  faReceipt,
  faSeedling,
  faUsers,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

const sections = [
  {
    label: "Ringkasan",
    href: "/dashboard",
    icon: faMugHot,
  },
  {
    label: "Operasional",
    children: [
      { label: "Manajemen Menu", href: "/menu", icon: faClipboardList },
      { label: "Pesanan", href: "/pesanan", icon: faReceipt },
      { label: "Supply Bahan", href: "/supply", icon: faWarehouse },
      { label: "Aset Cafe", href: "/identitas", icon: faBoxesPacking },
    ],
  },
  {
    label: "SDM",
    children: [
      { label: "Staff & Penilaian", href: "/staff", icon: faUsers },
      { label: "Absensi & Cuti", href: "/staff", icon: faPeopleGroup },
    ],
  },
  {
    label: "Identitas Cafe",
    href: "/identitas",
    icon: faIdCard,
  },
  {
    label: "Laporan",
    href: "/laporan",
    icon: faFileInvoiceDollar,
  },
  {
    label: "Supply Insight",
    href: "/supply",
    icon: faSeedling,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  useEffect(() => {
    const menu = new MetisMenu("#side-menu");
    return () => {
      menu.dispose();
    };
  }, []);

  return (
    <aside className="glass-panel sticky top-6 h-[calc(100vh-3rem)] overflow-hidden p-5">
      <div className="mb-6 space-y-1 border-b border-white/35 pb-5 dark:border-white/10">
        <p className="font-serif text-3xl font-semibold text-slate-700 dark:text-slate-100">CafeFlow</p>
        <p className="text-sm text-slate-500 dark:text-slate-300">Admin dashboard template</p>
      </div>

      <nav>
        <ul id="side-menu" className="metismenu space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {sections.map((section) => {
            if (section.children) {
              return (
                <li key={section.label}>
                  <a href="#" className="flex items-center justify-between rounded-2xl px-4 py-3 hover:bg-white/50 dark:hover:bg-slate-800/60">
                    <span>{section.label}</span>
                    <span className="text-xs">+</span>
                  </a>
                  <ul className="mt-2 space-y-2 pl-2">
                    {section.children.map((item) => (
                      <li key={`${item.href}-${item.label}`}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white/55 dark:hover:bg-slate-800/60",
                            pathname === item.href && "bg-white/60 text-slate-700 dark:bg-slate-800/75 dark:text-slate-100"
                          )}
                        >
                          <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li key={`${section.href}-${section.label}`}>
                <Link
                  href={section.href}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white/55 dark:hover:bg-slate-800/60",
                    pathname === section.href && "bg-white/60 text-slate-700 dark:bg-slate-800/75 dark:text-slate-100"
                  )}
                >
                  <FontAwesomeIcon icon={section.icon} className="h-4 w-4" />
                  <span>{section.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

