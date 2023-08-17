import { StudentState } from "@/types/Student"
import { Student } from "@prisma/client"
import { PayloadAction } from "@reduxjs/toolkit"

type Action = PayloadAction<Student>

export const updateStudentReducer = (state: StudentState, action: Action) => {
	const updatedStudent = action.payload
	state.currentStudent = updatedStudent
	const student = state.students.find(item => item.id === updatedStudent.id)

	if (!student) return

	student.avatar = updatedStudent.avatar
	student.difficulty = updatedStudent.difficulty
	student.name = updatedStudent.name
	student.roundLength = updatedStudent.roundLength
}
