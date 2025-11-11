"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import { AddAuditionDialog } from "./add-audition-dialog"

export function AuditionsHeader() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-balance">Auditions</h1>
          <p className="text-muted-foreground mt-2 text-balance">Track and manage all your auditions in one place</p>
        </div>
        <Button onClick={() => setDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Audition
        </Button>
      </div>

      <AddAuditionDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}
