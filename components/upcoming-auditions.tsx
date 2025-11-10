import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

const auditions = [
  {
    id: 1,
    project: "The Last Stand",
    role: "Detective Miller",
    date: "2025-10-25",
    time: "2:00 PM",
    location: "Warner Bros Studio",
    type: "In-Person",
  },
  {
    id: 2,
    project: "City Lights",
    role: "Supporting Role",
    date: "2025-10-28",
    time: "10:30 AM",
    location: "Self-Tape",
    type: "Self-Tape",
  },
  {
    id: 3,
    project: "Breaking Dawn",
    role: "Lead Character",
    date: "2025-11-02",
    time: "3:00 PM",
    location: "Paramount Pictures",
    type: "Callback",
  },
]

export function UpcomingAuditions() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Upcoming Auditions</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/auditions">View all</Link>
        </Button>
      </div>

      <div className="space-y-4">
        {auditions.map((audition) => (
          <div
            key={audition.id}
            className="flex flex-col gap-3 rounded-lg border border-border bg-muted/50 p-4 transition-colors hover:bg-muted"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{audition.project}</h3>
                <p className="text-sm text-muted-foreground">{audition.role}</p>
              </div>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {audition.type}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(audition.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {audition.time}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {audition.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
