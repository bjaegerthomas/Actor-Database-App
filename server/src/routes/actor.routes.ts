// src/routes/actor.routes.ts
import { Router } from "express";
import * as actorController from "../controllers/actor.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

// public
router.get("/", actorController.getAllActors);
router.get("/:id", actorController.getActorById);

// protected - create/update/delete require auth
router.post("/", authMiddleware, actorController.createActor);
router.put("/:id", authMiddleware, actorController.updateActor);
router.delete("/:id", authMiddleware, actorController.deleteActor);

export default router;
