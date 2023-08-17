"use client"
import { useEffect } from "react"
import StudentAvatar from "../StudentAvatar/StudentAvatar"
import { Student } from "@prisma/client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { initiateStudents } from "@/redux/features/student/studentSlice"

type Props = {
	students: Student[]
}

const StudentList = ({ students }: Props) => {
	const dispatch = useAppDispatch()
	const studentData = useAppSelector(s => s.student)

	useEffect(() => {
		if (studentData.students.length === 0) {
			dispatch(initiateStudents({ students }))
		}
	}, [])
	return (
		<div className="flex flex-1 flex-wrap content-center justify-around gap-6">
			{studentData.students.map(student => (
				<StudentAvatar
					href={`/education/${student.id}`}
					title={student.name}
					imageSrc={student.avatar}
					size="md"
					key={student.id}
				/>
			))}
		</div>
	)
}

export default StudentList
