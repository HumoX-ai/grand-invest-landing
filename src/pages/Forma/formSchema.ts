import { z } from "zod";

export const formSchema = z.object({
  full_name: z.string().min(2, {
    message: "Ismingiz kamida 3 ta belgidan iborat bo'lishi kerak",
  }),
  phone_number: z
    .string()
    .min(13, { message: "Telefon raqam 12 ta sondan iborat bo'lishi kerak" }) // Minimal uzunlikni tekshirish
    .max(13, { message: "Telefon raqam 12 ta sondan iborat bo'lishi kerak" }), // Maksimal uzunlikni tekshirish
  product_id: z.string({ message: "Mahsulotni tanlang" }).min(1, {
    message: "Mahsulotni tanlang",
  }),
});
