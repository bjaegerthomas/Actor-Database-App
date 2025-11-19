// src/routes/auth.routes.ts
import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

// register and login
router.post("/register", authController.register);
router.post("/login", authController.login);

// optional: route to get current user by token
router.get("/me", authController.me);

export default router;
