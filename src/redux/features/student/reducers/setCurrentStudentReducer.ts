import { StudentState } from "@/types/Student"
import { Student } from "@prisma/client"
import { PayloadAction } from "@reduxjs/toolkit"

type Action = PayloadAction<Student>

export const setCurrentStudentReducer = (
	state: StudentState,
	action: Action
) => {
	state.currentStudent = action.payload
}
