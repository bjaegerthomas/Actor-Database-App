// src/config/db.ts
// Initialize and export Prisma client

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// Optional: gracefully disconnect on app termination
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
