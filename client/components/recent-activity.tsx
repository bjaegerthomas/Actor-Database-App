import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, DollarSign, UserPlus } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "booking",
    title: 'Booked for "The Last Stand"',
    description: "Detective Miller role confirmed",
    time: "2 hours ago",
    icon: CheckCircle2,
    iconColor: "text-success",
  },
  {
    id: 2,
    type: "payment",
    title: "Payment received",
    description: "$2,500 from ABC Productions",
    time: "5 hours ago",
    icon: DollarSign,
    iconColor: "text-primary",
  },
  {
    id: 3,
    type: "contact",
    title: "New contact added",
    description: "Sarah Johnson - Casting Director",
    time: "1 day ago",
    icon: UserPlus,
    iconColor: "text-accent",
  },
  {
    id: 4,
    type: "rejection",
    title: "Audition result",
    description: 'Not selected for "City Nights"',
    time: "2 days ago",
    icon: XCircle,
    iconColor: "text-muted-foreground",
  },
]

export function RecentActivity() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <Button variant="ghost" size="sm">
          View all
        </Button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <activity.icon className={`h-5 w-5 ${activity.iconColor}`} />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{activity.title}</p>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
