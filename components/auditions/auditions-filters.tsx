"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const statusFilters = ["All", "Upcoming", "Callback", "Booked", "Rejected"]

interface AuditionsFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedStatus: string
  onStatusChange: (status: string) => void
}

export function AuditionsFilters({
  searchQuery,
  onSearchChange,
  selectedStatus,
  onStatusChange,
}: AuditionsFiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search auditions..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
        {statusFilters.map((status) => (
          <Button
            key={status}
            variant={status === selectedStatus ? "default" : "outline"}
            size="sm"
            className="whitespace-nowrap"
            onClick={() => onStatusChange(status)}
          >
            {status}
          </Button>
        ))}
      </div>
    </div>
  )
}
