import DashboardOverview from "@/components/dashboard/dashboard-overview";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { requireSession } from "@/lib/auth";

export default async function DashboardPage() {
  await requireSession();

  return (
    <DashboardShell>
      <DashboardOverview />
    </DashboardShell>
  );
}
