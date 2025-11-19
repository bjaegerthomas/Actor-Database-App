// src/middleware/auth.middleware.ts
// Protects routes by validating JWT token in Authorization header

import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/generateToken";
import { prisma } from "../config/db";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ message: "Missing Authorization header" });

    const parts = header.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") return res.status(401).json({ message: "Invalid Authorization format" });

    const token = parts[1];
    const payload = verifyToken(token);
    if (!payload || typeof payload === "string") return res.status(401).json({ message: "Invalid token" });

    // optionally fetch user from DB
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user) return res.status(401).json({ message: "User not found" });

    // attach user to request (use any to avoid TS augmentation here)
    (req as any).user = { id: user.id, email: user.email, name: user.name };
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized", details: err instanceof Error ? err.message : err });
  }
};
