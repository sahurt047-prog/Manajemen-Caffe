import { requireSession } from "@/lib/auth";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { ReportOverview } from "@/components/reports/report-overview";

export default async function ReportsPage() {
  await requireSession();

  return (
    <DashboardShell>
      <ReportOverview />
    </DashboardShell>
  );
}

