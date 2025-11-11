import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Wallet, PiggyBank } from "lucide-react"

const stats = [
  {
    name: "Total Income",
    value: "$45,231",
    change: "+20.1%",
    changeType: "positive",
    icon: TrendingUp,
    description: "From 89 transactions",
  },
  {
    name: "Total Expenses",
    value: "$12,450",
    change: "+8.2%",
    changeType: "negative",
    icon: TrendingDown,
    description: "From 34 transactions",
  },
  {
    name: "Net Income",
    value: "$32,781",
    change: "+15.3%",
    changeType: "positive",
    icon: Wallet,
    description: "This year",
  },
  {
    name: "Tax Savings",
    value: "$8,450",
    change: "Est. deductions",
    changeType: "neutral",
    icon: PiggyBank,
    description: "Estimated",
  },
]

export function FinancesStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.name} className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            {stat.changeType !== "neutral" && (
              <span
                className={
                  stat.changeType === "positive"
                    ? "text-sm font-medium text-success"
                    : "text-sm font-medium text-destructive"
                }
              >
                {stat.change}
              </span>
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
