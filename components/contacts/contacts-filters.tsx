"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const roleFilters = ["All", "Casting Director", "Agent", "Producer", "Director", "Manager"]

interface ContactsFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedRole: string
  onRoleChange: (role: string) => void
}

export function ContactsFilters({ searchQuery, onSearchChange, selectedRole, onRoleChange }: ContactsFiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search contacts..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
        {roleFilters.map((role) => (
          <Button
            key={role}
            variant={role === selectedRole ? "default" : "outline"}
            size="sm"
            className="whitespace-nowrap"
            onClick={() => onRoleChange(role)}
          >
            {role}
          </Button>
        ))}
      </div>
    </div>
  )
}
