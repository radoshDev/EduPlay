import { StudentState } from "@/types/Student"
import { Student } from "@prisma/client"
import { PayloadAction } from "@reduxjs/toolkit"

type Action = PayloadAction<Student>

export const addStudentReducer = (state: StudentState, action: Action) => {
	state.students.push(action.payload)
}
