import { TaskState } from "@/types/Task"
import { getCurrentTask } from "../utils"

export const hideResetModalReducer = (state: TaskState) => {
	const currentTask = getCurrentTask(state)
	if (!currentTask) return

	currentTask.showResetModal = false
}
