import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCards } from "@/components/stats-cards"
import { RecentActivity } from "@/components/recent-activity"
import { UpcomingAuditions } from "@/components/upcoming-auditions"
import { FinancialOverview } from "@/components/financial-overview"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-balance">Dashboard</h1>
          <p className="text-muted-foreground mt-2 text-balance">
            Welcome back! Here's an overview of your acting career.
          </p>
        </div>

        <StatsCards />

        <div className="grid gap-6 lg:grid-cols-2">
          <UpcomingAuditions />
          <RecentActivity />
        </div>

        <FinancialOverview />
      </div>
    </DashboardLayout>
  )
}
