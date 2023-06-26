import { z } from "zod"

export const AuthSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6).max(40),
})

export type AuthUserCred = z.infer<typeof AuthSchema>
