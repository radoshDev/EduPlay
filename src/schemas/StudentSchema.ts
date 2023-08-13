import { z } from "zod"

export const StudentSchema = z.object({
	id: z.string().optional(),
	name: z.string().nonempty("Name is required"),
	avatar: z.string(),
	difficulty: z.number().min(0).max(5),
	roundLength: z.number().min(3).max(20),
})

export type StudentInput = z.infer<typeof StudentSchema>
