import { ZodType, z } from "zod"
import { ImageFileSchema, validateImage } from "./RootSchema"

const CreatureCategorySchema = z.object({
	title: z.string().min(3),
	description: z.string().optional(),
	descriptionUA: z.string().optional(),
	imageUrl: z.string().optional(),
})

export const CreatureCategoryFormSchema = CreatureCategorySchema.extend({
	imageFile: z.any().optional() as ZodType<FileList | undefined>,
}).superRefine(validateImage)

export const CreatureCategoryInputSchema = CreatureCategorySchema.extend({
	imageFile: ImageFileSchema,
}).refine(data => data.imageUrl || data.imageFile, "Either file or image URL")

export const CreatureGetSchema = z.object({
	id: z.string(),
})

const CreatureSchema = z.object({
	name: z.string().min(2),
	id: z.string().optional(),
	source: z.string().optional(),
	description: z.string().optional(),
	imageUrl: z.string().optional(),
	media: z.array(z.string()).optional(),
})

export const CreatureFormSchema = CreatureSchema.extend({
	imageFile: z.any().optional() as ZodType<FileList | undefined>,
}).superRefine(validateImage)

export const CreatureInputSchema = CreatureSchema.extend({
	imageFile: ImageFileSchema,
	categorySlug: z.string(),
}).refine(data => data.imageUrl || data.imageFile, "Either file or image URL")

export type CreatureCategoryForm = z.infer<typeof CreatureCategoryFormSchema>
export type CreatureForm = z.infer<typeof CreatureFormSchema>
