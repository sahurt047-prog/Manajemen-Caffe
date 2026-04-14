import { requireSession } from "@/lib/auth";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { SupplyOverview } from "@/components/supply/supply-overview";

export default async function SupplyPage() {
  await requireSession();

  return (
    <DashboardShell>
      <SupplyOverview />
    </DashboardShell>
  );
}

