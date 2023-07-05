import { z } from "zod"

export const AuthSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6).max(40),
})

export type AuthUserCred = z.infer<typeof AuthSchema>

export const RegisterSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	password: z.string().min(6),
})

export type RegisterCred = z.infer<typeof RegisterSchema>
