import { Student } from "@prisma/client"

export type StudentState = {
	currentStudent: Student | null
	students: Student[]
}
