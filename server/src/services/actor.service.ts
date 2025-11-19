// src/services/actor.service.ts
import { prisma } from "../config/db";
import { Prisma } from "@prisma/client";

type Pagination = { page: number; limit: number };

export const getAllActors = async ({ page, limit }: Pagination) => {
  const skip = (page - 1) * limit;
  const [actors, total] = await Promise.all([
    prisma.actor.findMany({ skip, take: limit, orderBy: { createdAt: "desc" } }),
    prisma.actor.count()
  ]);
  return { actors, total, page, limit };
};

export const getActorById = async (id: string) => {
  return prisma.actor.findUnique({ where: { id } });
};

export const createActor = async (data: Prisma.ActorCreateInput) => {
  // basic validation can go here or in controller
  return prisma.actor.create({ data });
};

export const updateActor = async (id: string, data: Prisma.ActorUpdateInput) => {
  return prisma.actor.update({ where: { id }, data });
};

export const deleteActor = async (id: string) => {
  return prisma.actor.delete({ where: { id } });
};
