import { DashboardShell } from "@/components/layout/dashboard-shell";
import { requireSession } from "@/lib/auth";
import MenuClientPage from "./menu-client";

export default async function MenuPage() {
  await requireSession();

  return (
    <DashboardShell>
      <MenuClientPage />
    </DashboardShell>
  );
}

