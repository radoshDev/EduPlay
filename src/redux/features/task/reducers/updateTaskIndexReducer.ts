import { TaskState } from "@/types/Task"
import { getCurrentTask } from "../utils"
import { PayloadAction } from "@reduxjs/toolkit"

type Action = PayloadAction<"increment" | "decrement">

export const updateTaskIndexReducer = (state: TaskState, action: Action) => {
	const currentTask = getCurrentTask(state)
	if (!currentTask) return
	const isRoundEnd = currentTask.index === currentTask.roundLength
	const isBeforeRoundEnd = currentTask.index === currentTask.roundLength - 1

	if (action.payload === "increment" && isBeforeRoundEnd) {
		currentTask.earned++
	}
	if (action.payload === "decrement" && isRoundEnd) {
		currentTask.earned--
	}

	if (action.payload === "increment") {
		currentTask.index++
	} else {
		currentTask.index--
	}
}
