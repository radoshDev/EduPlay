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

export type TaskCategoryForm = z.infer<typeof TaskCategoryFormSchema>
