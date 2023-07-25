"use client"

import Header from "./Header/Header"
import Content from "./Content/Content"
import Navigation from "./Navigation/Navigation"
import { Task } from "@prisma/client"
import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { tasksState } from "@/states/taskState"

type Props = {
	tasks: Task[]
}

const TaskBoard = ({ tasks }: Props) => {
	const setTasks = useSetRecoilState(tasksState)
	useEffect(() => {
		setTasks(tasks)
	}, [tasks, setTasks])
	return (
		<div className="mx-auto flex h-screen max-h-screen max-w-3xl flex-col p-6">
			<Header />
			<Content />
			<Navigation />
		</div>
	)
}

export default TaskBoard
