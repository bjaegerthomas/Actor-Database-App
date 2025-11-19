// src/services/auth.service.ts
import { prisma } from "../config/db";
import bcrypt from "bcryptjs";
import { generateToken, verifyToken } from "../utils/generateToken";

const SALT_ROUNDS = 10;

export const register = async ({ email, password, name }: { email: string; password: string; name?: string }) => {
  // check existing
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) throw { status: 400, message: "Email already registered" };

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await prisma.user.create({
    data: { email, password: passwordHash, name }
  });

  // return public fields + token
  const token = generateToken(user.id);
  return { user: { id: user.id, email: user.email, name: user.name }, token };
};

export const login = async ({ email, password }: { email: string; password: string }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw { status: 400, message: "Invalid email or password" };

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw { status: 400, message: "Invalid email or password" };

  const token = generateToken(user.id);
  return { user: { id: user.id, email: user.email, name: user.name }, token };
};

export const getUserFromToken = async (token: string) => {
  try {
    const payload = verifyToken(token);
    if (!payload || typeof payload === "string") return null;
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user) return null;
    return { id: user.id, email: user.email, name: user.name };
  } catch {
    return null;
  }
};
