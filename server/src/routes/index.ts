// src/routes/index.ts
// Aggregates routes

import { Router } from "express";
import actorRoutes from "./actor.routes";
import authRoutes from "./auth.routes";

export const router = Router();

router.use("/actors", actorRoutes);
router.use("/auth", authRoutes);

export default router;
