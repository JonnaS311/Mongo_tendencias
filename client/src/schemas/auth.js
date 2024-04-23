import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Por favor ingresa una dirección de email valida",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe ser de mínimo 6 caracteres",
  }),
});

export const registerSchema = z
  .object({
    username: z
      .string({
        required_error: "nombre de usuario es requerido",
      })
      .min(3, {
        message: "El nombre de usuario debe ser mínimo 2 caracteres",
      }),
    email: z.string().email({
      message: "Ingresa una dirección de email valida",
    }),
    password: z.string().min(6, {
      message: "La contraseña debe ser de mínimo 6 caracteres",
    }),
    confirmPassword: z.string().min(6, {
      message: "La contraseña debe ser de mínimo 6 caracteres",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Contraseñas diferentes",
    path: ["confirmPassword"],
  });
