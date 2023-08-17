"use client"
import { StudentAvatar } from "@/components/students"
import { setCurrentStudent } from "@/redux/features/student/studentSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { Student } from "@prisma/client"
import { useEffect } from "react"

type Props = {
	student: Student
}

const NavAvatar = ({ student }: Props) => {
	const dispatch = useAppDispatch()
	const currentStudent = useAppSelector(s => s.student.currentStudent)

	useEffect(() => {
		if (student.id !== currentStudent?.id) {
			dispatch(setCurrentStudent(student))
		}
	}, [])

	if (!currentStudent) return <div>Ava Loading...</div>

	return (
		<StudentAvatar
			title={currentStudent.name}
			imageSrc={currentStudent.avatar}
			size="xs"
			href={`/students/${currentStudent.id}`}
		/>
	)
}

export default NavAvatar
