"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, MoreVertical, Edit, Trash2, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const transactions = [
  {
    id: 1,
    type: "income",
    description: "Acting Fee - The Last Stand",
    category: "Acting",
    amount: 5000,
    date: "2025-10-15",
    project: "The Last Stand",
    taxDeductible: false,
  },
  {
    id: 2,
    type: "expense",
    description: "Headshots - Professional Photography",
    category: "Marketing",
    amount: 450,
    date: "2025-10-12",
    taxDeductible: true,
  },
  {
    id: 3,
    type: "income",
    description: "Commercial Residuals - Nike Ad",
    category: "Residuals",
    amount: 1200,
    date: "2025-10-10",
    project: "Nike Commercial",
    taxDeductible: false,
  },
  {
    id: 4,
    type: "expense",
    description: "Acting Class - Method Workshop",
    category: "Training",
    amount: 350,
    date: "2025-10-08",
    taxDeductible: true,
  },
  {
    id: 5,
    type: "income",
    description: "Voice Over - Animation Project",
    category: "Voice Over",
    amount: 800,
    date: "2025-10-05",
    project: "Animation Series",
    taxDeductible: false,
  },
  {
    id: 6,
    type: "expense",
    description: "Union Dues - SAG-AFTRA",
    category: "Professional Fees",
    amount: 225,
    date: "2025-10-01",
    taxDeductible: true,
  },
  {
    id: 7,
    type: "expense",
    description: "Travel - Audition in LA",
    category: "Travel",
    amount: 180,
    date: "2025-09-28",
    taxDeductible: true,
  },
  {
    id: 8,
    type: "income",
    description: "Theater Performance - Broadway Show",
    category: "Theater",
    amount: 2500,
    date: "2025-09-25",
    project: "Broadway Production",
    taxDeductible: false,
  },
]

const filterCategories = ["All", "Acting", "Residuals", "Marketing", "Training", "Travel"]

export function TransactionsList() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Recent Transactions</h2>
            <p className="text-sm text-muted-foreground mt-1">Track all your income and expenses</p>
          </div>
          <div className="relative max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search transactions..." className="pl-9" />
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {filterCategories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="space-y-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/50"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                  transaction.type === "income" ? "bg-success/10" : "bg-destructive/10"
                }`}
              >
                {transaction.type === "income" ? (
                  <ArrowDownRight className="h-5 w-5 text-success" />
                ) : (
                  <ArrowUpRight className="h-5 w-5 text-destructive" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{transaction.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {transaction.category}
                      </Badge>
                      {transaction.taxDeductible && (
                        <Badge className="text-xs bg-accent/10 text-accent">Tax Deductible</Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p
                      className={`font-semibold ${transaction.type === "income" ? "text-success" : "text-foreground"}`}
                    >
                      {transaction.type === "income" ? "+" : "-"}${transaction.amount.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(transaction.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
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
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </Card>
  )
}
