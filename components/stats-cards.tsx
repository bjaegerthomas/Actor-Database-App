import { Card } from "@/components/ui/card"
import { Calendar, DollarSign, TrendingUp, Users } from "lucide-react"

const stats = [
  {
    name: "Total Auditions",
    value: "24",
    change: "+12%",
    changeType: "positive",
    icon: Calendar,
  },
  {
    name: "Total Income",
    value: "$45,231",
    change: "+20.1%",
    changeType: "positive",
    icon: DollarSign,
  },
  {
    name: "Booking Rate",
    value: "32%",
    change: "+4.5%",
    changeType: "positive",
    icon: TrendingUp,
  },
  {
    name: "Active Contacts",
    value: "89",
    change: "+8",
    changeType: "positive",
    icon: Users,
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.name} className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <span
              className={
                stat.changeType === "positive"
                  ? "text-sm font-medium text-success"
                  : "text-sm font-medium text-destructive"
              }
            >
              {stat.change}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight">{stat.value}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
