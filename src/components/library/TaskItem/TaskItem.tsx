import { FC } from "react"

type Props = {
	value: string
}

const TaskItem: FC<Props> = ({ value }) => {
	return (
		<div className="badge badge-ghost badge-lg text-lg font-bold">{value}</div>
	)
}

export default TaskItem
