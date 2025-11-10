"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AuditionsHeader } from "@/components/auditions/auditions-header"
import { AuditionsFilters } from "@/components/auditions/auditions-filters"
import { AuditionsGrid } from "@/components/auditions/auditions-grid"

export default function AuditionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("All")

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <AuditionsHeader />
        <AuditionsFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
        />
        <AuditionsGrid searchQuery={searchQuery} selectedStatus={selectedStatus} />
      </div>
    </DashboardLayout>
  )
}
