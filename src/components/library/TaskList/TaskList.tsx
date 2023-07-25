import { Task } from "@prisma/client"
import Link from "next/link"
import { ReactNode } from "react"
import TaskItem from "../TaskItem/TaskItem"

type Props = {
	tasks: Task[]
	subcategorySlug: string
	isLink: boolean
}

const TaskList = ({ tasks, subcategorySlug, isLink }: Props) => {
	let content: ReactNode
	if (tasks.length === 0) {
		content = <div>Task list is empty...</div>
	} else {
		content = tasks.map(task => {
			if (isLink) {
				return (
					<Link href={`${subcategorySlug}/${task.id}`} key={task.id}>
						<TaskItem value={task.value} />
					</Link>
				)
			}
			return <TaskItem key={task.id} value={task.value} />
		})
	}

	return (
		<div className="flex w-full flex-1 flex-wrap content-start gap-2">
			{content}
		</div>
	)
}

export default TaskList
