import { z } from "zod"

export const StudentSchema = z.object({
	id: z.string().optional(),
	name: z.string().nonempty("Name is required"),
	avatar: z.string(),
})

export type StudentInput = z.infer<typeof StudentSchema>
