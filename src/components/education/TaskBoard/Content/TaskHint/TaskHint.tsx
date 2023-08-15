import { ButtonIcon } from "@/components/ui/buttons"
import { selectCurrentTask } from "@/redux/features/task/selector"
import { useAppSelector } from "@/redux/hooks"
import { BsWikipedia, BsFillImageFill } from "react-icons/bs"

const TaskHint = () => {
	const currentTask = useAppSelector(selectCurrentTask)

	if (!currentTask) return null

	if (currentTask.result) return null

	const word = currentTask.value

	return (
		<div className="flex justify-center gap-3">
			<ButtonIcon
				href={`https://uk.wiktionary.org/wiki/${word}`}
				round
				target="_blank"
				icon={<BsWikipedia size={24} />}
				color="warning"
			/>
			<ButtonIcon
				href={`https://www.google.com/search?q=${word}&tbm=isch`}
				round
				target="_blank"
				icon={<BsFillImageFill size={24} />}
				color="success"
			/>
		</div>
	)
}

export default TaskHint
