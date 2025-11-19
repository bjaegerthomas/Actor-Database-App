// src/controllers/auth.controller.ts
import { Request, Response, NextFunction } from "express";
import * as authService from "../services/auth.service";

/**
 * POST /api/auth/register
 */
export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, name } = req.body;
    const user = await authService.register({ email, password, name });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

/**
 * POST /api/auth/login
 */
export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login({ email, password });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

/**
 * GET /api/auth/me
 * If Authorization header present, return user info
 */
export const me = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // authMiddleware not required here; we decode token if present
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Missing Authorization header" });

    const token = authHeader.split(" ")[1];
    const user = await authService.getUserFromToken(token);
    if (!user) return res.status(401).json({ message: "Invalid token" });
    res.json(user);
  } catch (err) {
    next(err);
  }
};
