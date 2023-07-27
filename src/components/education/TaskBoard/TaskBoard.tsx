"use client"

import Header from "./Header/Header"
import Content from "./Content/Content"
import Navigation from "./Navigation/Navigation"
import { Task, Creature } from "@prisma/client"
import { useEffect } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { initiateTask } from "@/redux/features/task/taskSlice"

type Props = {
	tasks: Task[]
	creatures: Creature[]
	roundLength: number
	taskType: string
	studentId: string
}

const TaskBoard = (props: Props) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(initiateTask(props))
	}, [dispatch, props])

	return (
		<div className="mx-auto flex h-screen max-h-screen max-w-3xl flex-col p-6">
			<Header />
			<Content />
			<Navigation />
		</div>
	)
}

export default TaskBoard
