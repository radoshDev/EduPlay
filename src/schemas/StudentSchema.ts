import { z } from "zod"

export const AddStudentSchema = z.object({
	name: z.string().nonempty("Name is required"),
	avatar: z.string(),
})

export type AddStudentInput = z.infer<typeof AddStudentSchema>
