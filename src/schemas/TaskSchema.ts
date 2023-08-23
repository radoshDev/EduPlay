import { ZodType, z } from "zod"
import { DifficultySchema, ImageFileSchema, validateImage } from "./RootSchema"

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

const TaskSubcategorySchema = TaskCategorySchema.extend({
	difficulty: DifficultySchema,
})

export const TaskSubcategoryInputSchema = TaskSubcategorySchema.extend({
	imageFile: ImageFileSchema.optional(),
	parentSlug: z.string(),
}).refine(data => data.imageUrl || data.imageFile, "Either file or image URL")

export const TaskSubcategoryFormSchema = TaskSubcategorySchema.extend({
	imageFile: z.any().optional() as ZodType<FileList | undefined>,
}).superRefine(validateImage)

export const TaskSchema = z.object({
	value: z.string().nonempty("Value is required"),
	result: z.string().optional(),
	subcategorySlug: z.string(),
})

export const TaskUpdateSchema = TaskSchema.extend({
	id: z.string().optional(),
})

export const TasksGetSchema = z.object({
	difficulty: DifficultySchema.optional(),
	type: z.string(),
})

export type TaskCategoryForm = z.infer<typeof TaskCategoryFormSchema>
export type TaskSubcategoryForm = z.infer<typeof TaskSubcategoryFormSchema>
export type TaskForm = z.infer<typeof TaskSchema>
