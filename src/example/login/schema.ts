import { z } from "zod";

export const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(2)
})