import { z } from "zod";

export const authSchema = z.object({
  username: z.string().trim().min(1, "username is required"),
  email: z.email("invalid email"),
  password: z.string().min(5, "Password should be atleast 5 chars long"),
});
