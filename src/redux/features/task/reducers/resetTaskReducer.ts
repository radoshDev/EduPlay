import { TaskState } from "@/types/Task"
import { getCurrentTask } from "../utils"
import { generateUniqueList } from "@/helpers/generateUniqueList"
import { getRandomIndex } from "@/helpers/getRandomIndex"

export const resetTaskReducer = (state: TaskState) => {
	const currentTask = getCurrentTask(state)
	const { creatures } = state
	if (!currentTask) return

	currentTask.earned = 0
	currentTask.index = 0
	currentTask.showResetModal = false
	currentTask.roundTasks = generateUniqueList(
		state.tasks,
		currentTask.roundLength
	)
	currentTask.creature = creatures[getRandomIndex(creatures.length)]
}
