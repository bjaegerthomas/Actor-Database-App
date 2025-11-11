import { DashboardLayout } from "@/components/dashboard-layout"
import { FinancesHeader } from "@/components/finances/finances-header"
import { FinancesStats } from "@/components/finances/finances-stats"
import { FinancesChart } from "@/components/finances/finances-chart"
import { TransactionsList } from "@/components/finances/transactions-list"

export default function FinancesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <FinancesHeader />
        <FinancesStats />
        <FinancesChart />
        <TransactionsList />
      </div>
    </DashboardLayout>
  )
}
