import { ZodType, z } from "zod"
import { ImageFileSchema, validateImage } from "./RootSchema"

const TaskCategorySchema = z.object({
	title: z.string().nonempty("Title is required"),
	imageUrl: z.string().optional(),
})

export const TaskCategoryInputSchema = TaskCategorySchema.extend({
	imageFile: ImageFileSchema.optional(),
}).refine(data => data.imageUrl || data.imageFile, "Either file or image URL")

export const TaskCategoryFormSchema = TaskCategorySchema.extend({
	imageFile: z.any().optional() as ZodType<FileList | undefined>,
}).superRefine(validateImage)

export const TaskSubcategoryInputSchema = TaskCategorySchema.extend({
	imageFile: ImageFileSchema.optional(),
	parentSlug: z.string(),
}).refine(data => data.imageUrl || data.imageFile, "Either file or image URL")

export const TaskSubcategoryFormSchema = TaskCategorySchema.extend({
	imageFile: z.any().optional() as ZodType<FileList | undefined>,
}).superRefine(validateImage)

export const TaskSchema = z.object({
	value: z.string().nonempty("Value is required"),
	result: z.string().optional(),
	subcategorySlug: z.string(),
})

export type TaskCategoryForm = z.infer<typeof TaskCategoryFormSchema>
export type TaskSubcategoryForm = z.infer<typeof TaskSubcategoryFormSchema>
export type TaskForm = z.infer<typeof TaskSchema>
