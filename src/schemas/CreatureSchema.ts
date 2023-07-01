import { z } from "zod"

export const CreatureCategorySchema = z.object({
	title: z.string().min(3),
	description: z.string().max(250).optional(),
	imageUrl: z.string().optional(),
})

export type CreatureCategoryInput = z.infer<typeof CreatureCategorySchema>
