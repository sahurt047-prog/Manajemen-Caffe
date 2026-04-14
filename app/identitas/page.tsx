import { requireSession } from "@/lib/auth";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { IdentityOverview } from "@/components/identity/identity-overview";

export default async function IdentityPage() {
  await requireSession();

  return (
    <DashboardShell>
      <IdentityOverview />
    </DashboardShell>
  );
}

