import { StudentState } from "@/types/Student"
import { Student } from "@prisma/client"
import { PayloadAction } from "@reduxjs/toolkit"

type Action = PayloadAction<{ students: Student[] }>

export const initiateStudentsReducer = (
	state: StudentState,
	action: Action
) => {
	state.students = action.payload.students
}
