import { z } from "zod";

export const registerType = z.object({
  orgName: z.string().min(2, "Org name required"),
  legalName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
});

export const loginType = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});