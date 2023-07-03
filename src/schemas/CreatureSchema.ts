import { z } from "zod"

export const CreatureCategorySchema = z.object({
	title: z.string().min(3),
	description: z.string().max(250).optional(),
	imageUrl: z.string().optional(),
})

export const CreatureGetSchema = z.object({
	id: z.string(),
})

export const CreatureAddSchema = z
	.object({
		name: z.string(),
		description: z.string(),
		categorySlug: z.string(),
		imageFile: z.object({
			name: z
				.string()
				.refine(val => /\w+\.(jpg|png|jpeg|svg|gif|webp)/.test(val)),
			base64: z.string(),
		}),
		imageUrl: z.string(),
	})
	.partial({ imageFile: true, imageUrl: true, description: true })
	.refine(data => data.imageUrl || data.imageFile, "Either file or image URL")

export type CreatureCategoryInput = z.infer<typeof CreatureCategorySchema>
export type CreatureAddInput = z.infer<typeof CreatureAddSchema>
