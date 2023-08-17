"use client"

import { Badge } from "@/components/ui"
import { Student } from "@prisma/client"
import StudentAvatar from "../StudentAvatar/StudentAvatar"
import { DIFFICULTY_TYPES } from "@/constants"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { setCurrentStudent } from "@/redux/features/student/studentSlice"

type Props = {
	student: Student
}

const StudentInfo = ({ student }: Props) => {
	const dispatch = useAppDispatch()
	const currentStudent = useAppSelector(s => s.student.currentStudent)

	useEffect(() => {
		if (currentStudent?.id !== student.id) {
			dispatch(setCurrentStudent(student))
		}
	}, [])

	if (!currentStudent) return <div>Loading component...</div>

	return (
		<div className="mb-4">
			<StudentAvatar
				size="lg"
				title={currentStudent.name}
				imageSrc={currentStudent.avatar}
				variant="success"
			/>
			<div className="mt-2 font-bold">
				Difficulty:{" "}
				<Badge
					text={DIFFICULTY_TYPES[currentStudent.difficulty]}
					color="primary"
					size="lg"
					outline
				/>
			</div>
			<div className="mt-2 font-bold">
				Round Length:{" "}
				<Badge
					text={`${currentStudent.roundLength}`}
					color="primary"
					size="lg"
					outline
				/>
			</div>
		</div>
	)
}

export default StudentInfo
