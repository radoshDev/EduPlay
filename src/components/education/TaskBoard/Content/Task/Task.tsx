import { calcFontSize } from "@/helpers/calcFontSize"
import { selectCurrentTask } from "@/redux/features/task/selector"
import { useAppSelector } from "@/redux/hooks"

const Task = () => {
	const currentTask = useAppSelector(selectCurrentTask)

	if (!currentTask) return null

	return (
		<div
			className="text-center"
			style={{ fontSize: calcFontSize(currentTask.value.length) }}>
			{currentTask.value}
		</div>
	)
}

export default Task
