import { z } from "zod"
export const StudentSchema = z.object({
	id: z.string().optional(),
	name: z.string().nonempty("Name is required"),
	avatar: z.string(),
	difficulty: z.enum(["beginner", "easy", "normal", "hard", "expert", "ultra"]),
	roundLength: z.number().min(3).or(z.string().min(1)),
})

export type StudentInput = z.infer<typeof StudentSchema>
