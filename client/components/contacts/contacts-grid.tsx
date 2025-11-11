"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Building2, MoreVertical, Edit, Trash2, Star } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMemo } from "react"

const contacts = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Casting Director",
    company: "Warner Bros Studios",
    email: "sarah.johnson@warnerbros.com",
    phone: "(555) 123-4567",
    projects: ["The Last Stand", "City Nights"],
    lastContact: "2025-10-15",
    notes: "Prefers email communication",
    favorite: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Agent",
    company: "Creative Artists Agency",
    email: "m.chen@caa.com",
    phone: "(555) 234-5678",
    projects: ["City Lights"],
    lastContact: "2025-10-12",
    notes: "Specializes in commercial work",
    favorite: true,
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Producer",
    company: "Paramount Pictures",
    email: "emma.davis@paramount.com",
    phone: "(555) 345-6789",
    projects: ["Breaking Dawn"],
    lastContact: "2025-10-08",
    notes: "Working on multiple projects",
    favorite: false,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Casting Director",
    company: "ABC Studios",
    email: "j.wilson@abc.com",
    phone: "(555) 456-7890",
    projects: ["Night Shift"],
    lastContact: "2025-10-05",
    notes: "Focus on TV series",
    favorite: false,
  },
  {
    id: 5,
    name: "Lisa Martinez",
    role: "Director",
    company: "Universal Studios",
    email: "lisa.m@universal.com",
    phone: "(555) 567-8901",
    projects: ["Summer Days"],
    lastContact: "2025-09-28",
    notes: "Independent film director",
    favorite: false,
  },
  {
    id: 6,
    name: "Robert Taylor",
    role: "Casting Director",
    company: "Sony Pictures",
    email: "r.taylor@sony.com",
    phone: "(555) 678-9012",
    projects: ["The Detective"],
    lastContact: "2025-09-25",
    notes: "Looking for character actors",
    favorite: true,
  },
  {
    id: 7,
    name: "Jennifer Lee",
    role: "Manager",
    company: "Brillstein Entertainment",
    email: "jennifer.lee@brillstein.com",
    phone: "(555) 789-0123",
    projects: [],
    lastContact: "2025-09-20",
    notes: "Interested in representation",
    favorite: false,
  },
  {
    id: 8,
    name: "David Brown",
    role: "Producer",
    company: "Netflix Studios",
    email: "d.brown@netflix.com",
    phone: "(555) 890-1234",
    projects: ["Streaming Series"],
    lastContact: "2025-09-15",
    notes: "Developing new series",
    favorite: false,
  },
]

const roleColors: Record<string, string> = {
  "Casting Director": "bg-primary/10 text-primary",
  Agent: "bg-accent/10 text-accent",
  Producer: "bg-success/10 text-success",
  Director: "bg-warning/10 text-warning",
  Manager: "bg-chart-4/10 text-chart-4",
}

interface ContactsGridProps {
  searchQuery: string
  selectedRole: string
}

export function ContactsGrid({ searchQuery, selectedRole }: ContactsGridProps) {
  const filteredContacts = useMemo(() => {
    let filtered = [...contacts]

    // Sort alphabetically by name
    filtered.sort((a, b) => a.name.localeCompare(b.name))

    // Filter by role
    if (selectedRole !== "All") {
      filtered = filtered.filter((contact) => contact.role === selectedRole)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (contact) =>
          contact.name.toLowerCase().includes(query) ||
          contact.role.toLowerCase().includes(query) ||
          contact.company.toLowerCase().includes(query) ||
          contact.email.toLowerCase().includes(query) ||
          contact.projects.some((project) => project.toLowerCase().includes(query)),
      )
    }

    return filtered
  }, [searchQuery, selectedRole])

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredContacts.map((contact) => (
        <Card key={contact.id} className="p-5 hover:shadow-lg transition-shadow">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg leading-tight">{contact.name}</h3>
                  {contact.favorite && <Star className="h-4 w-4 fill-warning text-warning" />}
                </div>
                <Badge className={`mt-2 text-xs ${roleColors[contact.role] || "bg-muted text-muted-foreground"}`}>
                  {contact.role}
                </Badge>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Star className="h-4 w-4 mr-2" />
                    {contact.favorite ? "Remove from favorites" : "Add to favorites"}
                  </DropdownMenuItem>
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

            {/* Company */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4 shrink-0" />
              <span className="truncate">{contact.company}</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href={`mailto:${contact.email}`} className="truncate text-primary hover:underline">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href={`tel:${contact.phone}`} className="text-foreground hover:text-primary">
                  {contact.phone}
                </a>
              </div>
            </div>

            {/* Projects */}
            {contact.projects.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">Projects</p>
                <div className="flex flex-wrap gap-1">
                  {contact.projects.map((project) => (
                    <Badge key={project} variant="outline" className="text-xs">
                      {project}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Notes */}
            {contact.notes && (
              <div className="rounded-lg bg-muted/50 p-3">
                <p className="text-xs text-muted-foreground leading-relaxed">{contact.notes}</p>
              </div>
            )}

            {/* Last Contact */}
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Last contact:{" "}
                <span className="text-foreground font-medium">
                  {new Date(contact.lastContact).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
