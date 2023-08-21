"use client"

import Header from "./Header/Header"
import Content from "./Content/Content"
import Navigation from "./Navigation/Navigation"
import { Task, Creature, Student } from "@prisma/client"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { initiateTask } from "@/redux/features/task/taskSlice"
import ResetModal from "./ResetModal/ResetModal"
import { setCurrentStudent } from "@/redux/features/student/studentSlice"

type Props = {
	tasks: Task[]
	creatures: Creature[]
	taskType: string
	student: Student | null
}

const TaskBoard = (props: Props) => {
	const { student, ...taskProps } = props
	const dispatch = useAppDispatch()
	const currentStudent = useAppSelector(s => s.student.currentStudent)

	useEffect(() => {
		if (!student) return
		if (student && currentStudent?.id === student.id) return
		dispatch(setCurrentStudent(student))
	}, [student])

	useEffect(() => {
		if (student && !currentStudent) return
		dispatch(
			initiateTask({
				...taskProps,
				studentId: currentStudent?.id || "unknown",
				roundLength: currentStudent?.roundLength || 5,
			})
		)
	}, [currentStudent?.id])

	return (
		<div className="mx-auto flex h-screen max-h-screen max-w-3xl flex-col px-2 py-4">
			<Header />
			<Content />
			<Navigation />
			<ResetModal />
		</div>
	)
}

export default TaskBoard
