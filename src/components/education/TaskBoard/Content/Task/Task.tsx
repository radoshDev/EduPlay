import { calcFontSize } from "@/helpers/calcFontSize"
import { tasksState } from "@/states/taskState"
import { useRecoilValue } from "recoil"

const Task = () => {
	const tasks = useRecoilValue(tasksState)
	return (
		<>
			<div className="text-center" style={{ fontSize: calcFontSize(6) }}>
				Нікіта
			</div>
			<pre>
				{JSON.stringify(
					tasks.map(t => t.value),
					null,
					2
				)}
			</pre>
		</>
	)
}

export default Task
