import { RootState } from "@/redux/store"
import { getCurrentTask } from "./utils"

export const selectCurrentTaskRound = (state: RootState) => {
	return getCurrentTask(state.task)
}

export const selectCurrentTask = (state: RootState) => {
	const currentTask = getCurrentTask(state.task)
	if (!currentTask) return
	return currentTask.roundTasks[currentTask.index]
}

export const selectIsRoundEnd = (state: RootState) => {
	const currentTask = getCurrentTask(state.task)
	if (!currentTask) return false
	return currentTask.roundLength === currentTask.index
}
