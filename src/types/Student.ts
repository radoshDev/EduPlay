import { Student } from "@prisma/client"

export type StudentState = {
	currentStudent: Student | null
	students: Student[]
}

export type Progress = {
	date: string
	value: number
}

export type StudentsProgress = {
	label: string
	progress: Progress[]
	backgroundColor: string
}
