import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "El titulo es requerido",
  }),
  description: z.string().optional(),
  date: z.string().datetime().optional(),
});
