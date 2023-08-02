import Task from "./Task/Task"
import TaskHint from "./TaskHint/TaskHint"
import TaskSalute from "./TaskSalute/TaskSalute"

const Content = () => {
	return (
		<div className="relative flex flex-1 flex-col justify-center">
			<Task />
			<TaskHint />
			<TaskSalute />
		</div>
	)
}

export default Content
