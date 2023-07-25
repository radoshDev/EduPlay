import Task from "./Task/Task"
import TaskHint from "./TaskHint/TaskHint"

const Content = () => {
	return (
		<div className="flex flex-1 flex-col justify-center">
			<Task />
			<TaskHint />
		</div>
	)
}

export default Content
