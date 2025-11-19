// src/middleware/error.middleware.ts
import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  // Accept thrown objects like { status, message } from services
  const status = err?.status ?? 500;
  const message = err?.message ?? "Internal Server Error";
  console.error("ErrorHandler:", err);
  res.status(status).json({ success: false, message });
};
