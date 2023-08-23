import { z } from "zod"
import { DifficultySchema } from "./RootSchema"

export const StudentSchema = z.object({
	id: z.string().optional(),
	name: z.string().nonempty("Name is required"),
	avatar: z.string(),
	difficulty: DifficultySchema,
	roundLength: z.number().min(3).max(20),
})

export const StudentInputSchema = z.object({ id: z.string() })

export const StudentProgressInputSchema = z.object({
	studentId: z.string(),
	roundLength: z.number(),
})

export type StudentInput = z.infer<typeof StudentSchema>
