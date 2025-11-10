"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, MoreVertical, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMemo } from "react"

const auditions = [
  {
    id: 1,
    project: "The Last Stand",
    role: "Detective Miller",
    type: "Lead",
    date: "2025-10-25",
    time: "2:00 PM",
    location: "Warner Bros Studio",
    auditionType: "In-Person",
    status: "upcoming",
    notes: "Prepare monologue from scene 12",
    castingDirector: "Sarah Johnson",
  },
  {
    id: 2,
    project: "City Lights",
    role: "Supporting Character",
    type: "Supporting",
    date: "2025-10-28",
    time: "10:30 AM",
    location: "Self-Tape",
    auditionType: "Self-Tape",
    status: "upcoming",
    notes: "Submit by end of week",
    castingDirector: "Michael Chen",
  },
  {
    id: 3,
    project: "Breaking Dawn",
    role: "Lead Character",
    type: "Lead",
    date: "2025-11-02",
    time: "3:00 PM",
    location: "Paramount Pictures",
    auditionType: "Callback",
    status: "callback",
    notes: "Second callback - chemistry read",
    castingDirector: "Emma Davis",
  },
  {
    id: 4,
    project: "Night Shift",
    role: "Dr. Anderson",
    type: "Recurring",
    date: "2025-10-15",
    time: "11:00 AM",
    location: "ABC Studios",
    auditionType: "In-Person",
    status: "booked",
    notes: "Booked for 6 episodes",
    castingDirector: "James Wilson",
  },
  {
    id: 5,
    project: "Summer Days",
    role: "Background",
    type: "Extra",
    date: "2025-10-10",
    time: "9:00 AM",
    location: "Universal Studios",
    auditionType: "In-Person",
    status: "rejected",
    notes: "Not selected",
    castingDirector: "Lisa Martinez",
  },
  {
    id: 6,
    project: "The Detective",
    role: "Inspector Hayes",
    type: "Guest Star",
    date: "2025-11-05",
    time: "1:00 PM",
    location: "Sony Pictures",
    auditionType: "In-Person",
    status: "upcoming",
    notes: "British accent required",
    castingDirector: "Robert Taylor",
  },
]

const statusConfig = {
  upcoming: { label: "Upcoming", color: "bg-primary/10 text-primary" },
  callback: { label: "Callback", color: "bg-accent/10 text-accent" },
  booked: { label: "Booked", color: "bg-success/10 text-success" },
  rejected: { label: "Rejected", color: "bg-muted text-muted-foreground" },
}

interface AuditionsGridProps {
  searchQuery: string
  selectedStatus: string
}

export function AuditionsGrid({ searchQuery, selectedStatus }: AuditionsGridProps) {
  const filteredAuditions = useMemo(() => {
    let filtered = [...auditions]

    // Sort by date (most recent first)
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    // Filter by status
    if (selectedStatus !== "All") {
      filtered = filtered.filter((audition) => audition.status.toLowerCase() === selectedStatus.toLowerCase())
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (audition) =>
          audition.project.toLowerCase().includes(query) ||
          audition.role.toLowerCase().includes(query) ||
          audition.location.toLowerCase().includes(query) ||
          audition.castingDirector.toLowerCase().includes(query) ||
          audition.type.toLowerCase().includes(query),
      )
    }

    return filtered
  }, [searchQuery, selectedStatus])

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredAuditions.map((audition) => (
        <Card key={audition.id} className="p-5 hover:shadow-lg transition-shadow">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg leading-tight text-balance">{audition.project}</h3>
                <p className="text-sm text-muted-foreground mt-1">{audition.role}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                {audition.type}
              </Badge>
              <Badge className={`text-xs ${statusConfig[audition.status as keyof typeof statusConfig].color}`}>
                {statusConfig[audition.status as keyof typeof statusConfig].label}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {audition.auditionType}
              </Badge>
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4 shrink-0" />
                <span>
                  {new Date(audition.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0" />
                <span>{audition.time}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="truncate">{audition.location}</span>
              </div>
            </div>

            {/* Notes */}
            {audition.notes && (
              <div className="rounded-lg bg-muted/50 p-3">
                <p className="text-xs text-muted-foreground leading-relaxed">{audition.notes}</p>
              </div>
            )}

            {/* Casting Director */}
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground">
                CD: <span className="text-foreground font-medium">{audition.castingDirector}</span>
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
