// src/models/actor.model.ts
// Optional TypeScript interface mirroring Prisma Actor model
// Helps when writing frontend/shared types or when not importing Prisma types directly.

export interface ActorModel {
    id: string;
    firstName: string;
    lastName: string;
    bio?: string | null;
    dateOfBirth?: string | null;
    createdAt: string;
    updatedAt: string;
  }
  