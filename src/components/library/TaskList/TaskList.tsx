import { Task } from "@prisma/client"
import Link from "next/link"
import { ReactNode } from "react"

type Props = {
	tasks: Task[]
	subcategorySlug: string
}

const TaskList = ({ tasks, subcategorySlug }: Props) => {
	let content: ReactNode
	if (tasks.length === 0) {
		content = <div>Task list is empty...</div>
	} else {
		content = tasks.map(task => (
			<Link
				href={`${subcategorySlug}/${task.id}`}
				key={task.id}
				className="badge badge-ghost badge-lg text-lg font-bold">
				{task.value}
			</Link>
		))
	}
	return <div className="flex w-full flex-1 flex-wrap gap-2">{content}</div>
}

export default TaskList
