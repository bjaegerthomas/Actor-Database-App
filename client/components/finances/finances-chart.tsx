"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const monthlyData = [
  { month: "Jan", income: 4200, expenses: 1800 },
  { month: "Feb", income: 3800, expenses: 2100 },
  { month: "Mar", income: 5200, expenses: 1900 },
  { month: "Apr", income: 4800, expenses: 2300 },
  { month: "May", income: 6100, expenses: 2000 },
  { month: "Jun", income: 5400, expenses: 2200 },
  { month: "Jul", income: 4900, expenses: 1950 },
  { month: "Aug", income: 5800, expenses: 2100 },
  { month: "Sep", income: 4600, expenses: 1850 },
  { month: "Oct", income: 5100, expenses: 2050 },
]

const timeRanges = ["6M", "1Y", "All"]

export function FinancesChart() {
  const maxValue = Math.max(...monthlyData.flatMap((d) => [d.income, d.expenses]))

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Income vs Expenses</h2>
          <p className="text-sm text-muted-foreground mt-1">Monthly breakdown</p>
        </div>
        <div className="flex gap-1 rounded-lg border border-border p-1">
          {timeRanges.map((range) => (
            <Button key={range} variant={range === "6M" ? "secondary" : "ghost"} size="sm" className="h-8 px-3 text-xs">
              {range}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {monthlyData.map((data) => (
          <div key={data.month} className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium w-12">{data.month}</span>
              <div className="flex gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />${data.income.toLocaleString()}
                </span>
                <span className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-destructive/60" />${data.expenses.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="flex gap-2 h-10">
              <div
                className="bg-primary rounded-lg transition-all hover:opacity-80"
                style={{ width: `${(data.income / maxValue) * 100}%` }}
              />
              <div
                className="bg-destructive/60 rounded-lg transition-all hover:opacity-80"
                style={{ width: `${(data.expenses / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-border text-sm">
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
