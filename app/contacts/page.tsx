"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { ContactsHeader } from "@/components/contacts/contacts-header"
import { ContactsFilters } from "@/components/contacts/contacts-filters"
import { ContactsGrid } from "@/components/contacts/contacts-grid"

export default function ContactsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState("All")

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <ContactsHeader />
        <ContactsFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
        />
        <ContactsGrid searchQuery={searchQuery} selectedRole={selectedRole} />
      </div>
    </DashboardLayout>
  )
}
