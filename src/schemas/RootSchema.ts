import { RefinementCtx, z } from "zod"

export const ImportSchema = z.object({ base64File: z.string() })

export const ImageFileSchema = z
	.object({
		name: z
			.string()
			.refine(
				val => /\w+\.(jpg|png|jpeg|svg|gif|webp)/.test(val),
				"Invalid image format. Allow: jpg|png|jpeg|svg|gif|webp"
			),
		base64: z.string(),
	})
	.optional()

export type ImageFile = z.infer<typeof ImageFileSchema>

export function validateImage(values: any, ctx: RefinementCtx) {
	if (!values.imageUrl && values.imageFile?.length === 0) {
		ctx.addIssue({
			message: "Either file or image link",
			code: z.ZodIssueCode.custom,
			path: ["imageUrl"],
		})
		ctx.addIssue({
			message: "Either file or image link",
			code: z.ZodIssueCode.custom,
			path: ["imageFile"],
		})
	}
}
