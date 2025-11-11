"use client"

import { Button } from "@/components/ui/button"
import { Plus, Download } from "lucide-react"
import { useState } from "react"
import { AddTransactionDialog } from "./add-transaction-dialog"

export function FinancesHeader() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-balance">Finances</h1>
          <p className="text-muted-foreground mt-2 text-balance">Track your income and expenses for tax season</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button onClick={() => setDialogOpen(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Transaction
          </Button>
        </div>
      </div>

      <AddTransactionDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}
