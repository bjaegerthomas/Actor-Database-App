"use client"

import { Button } from "@/components/ui/button"
import { Plus, Download } from "lucide-react"
import { useState } from "react"
import { AddContactDialog } from "./add-contact-dialog"

export function ContactsHeader() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-balance">Contacts</h1>
          <p className="text-muted-foreground mt-2 text-balance">Manage your industry connections and relationships</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button onClick={() => setDialogOpen(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Contact
          </Button>
        </div>
      </div>

      <AddContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}
