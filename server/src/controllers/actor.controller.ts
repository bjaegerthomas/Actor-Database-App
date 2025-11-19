// src/controllers/actor.controller.ts
import { Request, Response, NextFunction } from "express";
import * as actorService from "../services/actor.service";

/**
 * GET /api/actors
 */
export const getAllActors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // optional pagination
    const page = Number(req.query.page ?? 1);
    const limit = Number(req.query.limit ?? 50);
    const result = await actorService.getAllActors({ page, limit });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

/**
 * GET /api/actors/:id
 */
export const getActorById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const actor = await actorService.getActorById(id);
    if (!actor) return res.status(404).json({ message: "Actor not found" });
    res.json(actor);
  } catch (err) {
    next(err);
  }
};

/**
 * POST /api/actors
 * Protected
 */
export const createActor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const created = await actorService.createActor(payload);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

/**
 * PUT /api/actors/:id
 * Protected
 */
export const updateActor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    const updated = await actorService.updateActor(id, payload);
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

/**
 * DELETE /api/actors/:id
 * Protected
 */
export const deleteActor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    await actorService.deleteActor(id);
    res.json({ message: "Actor deleted" });
  } catch (err) {
    next(err);
  }
};
