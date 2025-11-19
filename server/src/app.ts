// src/app.ts
// Express app configuration

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes";
import { errorHandler } from "./middleware/error.middleware";
import { loggerMiddleware } from "./middleware/logger.middleware";

dotenv.config();

export const app = express();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// mount routes under /api
app.use("/api", router);

// default health route
app.get("/health", (req, res) => {
  res.json({ status: "ok", now: new Date().toISOString() });
});

// error handling (last)
app.use(errorHandler);
