import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown } from "lucide-react"
import Link from "next/link"

const monthlyData = [
  { month: "Jan", income: 4200, expenses: 1800 },
  { month: "Feb", income: 3800, expenses: 2100 },
  { month: "Mar", income: 5200, expenses: 1900 },
  { month: "Apr", income: 4800, expenses: 2300 },
  { month: "May", income: 6100, expenses: 2000 },
  { month: "Jun", income: 5400, expenses: 2200 },
]

export function FinancialOverview() {
  const totalIncome = monthlyData.reduce((sum, month) => sum + month.income, 0)
  const totalExpenses = monthlyData.reduce((sum, month) => sum + month.expenses, 0)
  const netIncome = totalIncome - totalExpenses

  const maxValue = Math.max(...monthlyData.flatMap((d) => [d.income, d.expenses]))

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Financial Overview</h2>
          <p className="text-sm text-muted-foreground mt-1">Last 6 months</p>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/finances">View details</Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <div className="rounded-lg border border-border bg-muted/50 p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <TrendingUp className="h-4 w-4 text-success" />
            Total Income
          </div>
          <p className="text-2xl font-bold">${totalIncome.toLocaleString()}</p>
        </div>
        <div className="rounded-lg border border-border bg-muted/50 p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <TrendingDown className="h-4 w-4 text-destructive" />
            Total Expenses
          </div>
          <p className="text-2xl font-bold">${totalExpenses.toLocaleString()}</p>
        </div>
        <div className="rounded-lg border border-border bg-muted/50 p-4">
          <div className="text-sm text-muted-foreground mb-1">Net Income</div>
          <p className="text-2xl font-bold text-success">${netIncome.toLocaleString()}</p>
        </div>
      </div>

      {/* Simple bar chart */}
      <div className="space-y-4">
        {monthlyData.map((data) => (
          <div key={data.month} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{data.month}</span>
              <span className="text-muted-foreground">
                ${data.income.toLocaleString()} / ${data.expenses.toLocaleString()}
              </span>
            </div>
            <div className="flex gap-1 h-8">
              <div
                className="bg-primary rounded transition-all"
                style={{ width: `${(data.income / maxValue) * 100}%` }}
              />
              <div
                className="bg-destructive/60 rounded transition-all"
                style={{ width: `${(data.expenses / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-primary" />
          <span className="text-muted-foreground">Income</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-destructive/60" />
          <span className="text-muted-foreground">Expenses</span>
        </div>
      </div>
    </Card>
  )
}
