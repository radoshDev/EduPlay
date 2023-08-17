import { StudentState } from "@/types/Student"
import { createSlice } from "@reduxjs/toolkit"
import { initiateStudentsReducer } from "./reducers/initiateStudentsReducer"
import { addStudentReducer } from "./reducers/addStudentReducer"
import { updateStudentReducer } from "./reducers/updateStudentReducer"
import { setCurrentStudentReducer } from "./reducers/setCurrentStudentReducer"

const initialState: StudentState = {
	currentStudent: null,
	students: [],
}

export const studentSlice = createSlice({
	name: "student",
	initialState,
	reducers: {
		initiateStudents: initiateStudentsReducer,
		addStudent: addStudentReducer,
		updateStudent: updateStudentReducer,
		setCurrentStudent: setCurrentStudentReducer,
	},
})

export const {
	initiateStudents,
	addStudent,
	updateStudent,
	setCurrentStudent,
} = studentSlice.actions
