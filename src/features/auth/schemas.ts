import { z } from "zod";

// Login Schema
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Required"),
});

// Register Schema
export const registerSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().email(),
  password: z.string().min(8, "Minimum 8 characters"),
});
