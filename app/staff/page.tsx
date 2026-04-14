import { requireSession } from "@/lib/auth";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { StaffOverview } from "@/components/staff/staff-overview";

export default async function StaffPage() {
  await requireSession();

  return (
    <DashboardShell>
      <StaffOverview />
    </DashboardShell>
  );
}

