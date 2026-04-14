import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export async function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto grid min-h-screen max-w-[1600px] gap-6 px-4 py-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-6">
      <Sidebar />
      <section className="space-y-6 pb-8">
        <Topbar />
        {children}
      </section>
    </main>
  );
}

