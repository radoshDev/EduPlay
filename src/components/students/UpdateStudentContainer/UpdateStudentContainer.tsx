"use client"

import { setCurrentStudent } from "@/redux/features/student/studentSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { Student } from "@prisma/client"
import { ReactNode, useEffect } from "react"

type Props = {
	student: Student
	children: ReactNode
}

const UpdateStudentContainer = ({ student, children }: Props) => {
	const dispatch = useAppDispatch()
	const currentStudent = useAppSelector(s => s.student.currentStudent)

	useEffect(() => {
		if (currentStudent?.id !== student.id) {
			dispatch(setCurrentStudent(student))
		}
	}, [])
	return children
}

export default UpdateStudentContainer
