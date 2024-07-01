import { z } from "zod";

export const formRegisterSchema = z.object({
  first_name: z.string().min(2, {
    message: "firstName must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "lastName must be at least 2 characters.",
  }),
  phone_number: z
    .string()
    .min(17, { message: "Phone number must be at least 12 characters." }) // Minimal uzunlikni tekshirish
    .max(17, { message: "Phone number must be at most 12 characters." }) // Maksimal uzunlikni tekshirish
    .regex(/^\+998 \d{2} \d{3}-\d{2}-\d{2}$/, {
      message: "Invalid phone number format.",
    }),
  birth_date: z
    .string()
    .regex(
      /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      "Date of Birth must be a valid date in the format yyyy-mm-dd"
    ),
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  id_card_series: z.string().regex(/^[A-Z]{2} \d{6}$/, {
    message: "Passport number must be a valid passport number",
  }),
});
