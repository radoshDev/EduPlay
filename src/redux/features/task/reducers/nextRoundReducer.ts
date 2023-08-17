import { TaskState } from "@/types/Task"
import { getCurrentTask } from "../utils"
import { generateUniqueList } from "@/helpers/generateUniqueList"
import { getRandomIndex } from "@/helpers/getRandomIndex"

export const nextRoundReducer = (state: TaskState) => {
	const currentTask = getCurrentTask(state)

	if (!currentTask) return

	currentTask.index = 0
	currentTask.roundTasks = generateUniqueList(
		state.tasks,
		currentTask.roundLength
	)
	currentTask.creature = state.creatures[getRandomIndex(state.creatures.length)]
}
