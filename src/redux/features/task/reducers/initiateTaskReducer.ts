import { Creature, Task } from "@prisma/client"
import { PayloadAction } from "@reduxjs/toolkit"
import { generateUniqueList } from "@/helpers/generateUniqueList"
import { getRandomIndex } from "@/helpers/getRandomIndex"
import { TaskState } from "@/types/Task"

type InitiateTaskPayload = PayloadAction<{
	studentId: string
	taskType: string
	tasks: Task[]
	roundLength: number
	creatures: Creature[]
}>

export const initiateTaskReducer = (
	state: TaskState,
	action: InitiateTaskPayload
) => {
	const { studentId, taskType, tasks, roundLength, creatures } = action.payload

	state.taskType = taskType
	state.tasks = tasks
	state.creatures = creatures
	state.studentId = studentId

	if (state.studentProgress[studentId] === undefined) {
		state.studentProgress[studentId] = {}
	}

	const currentTask = state.studentProgress[studentId]![taskType]

	if (currentTask && (currentTask.earned > 0 || currentTask.index > 0)) {
		currentTask.showResetModal = true
		return
	}

	if (currentTask) return

	state.studentProgress[studentId]![taskType] = {
		showResetModal: false,
		earned: 0,
		index: 0,
		roundLength,
		roundTasks: generateUniqueList(state.tasks, roundLength),
		creature: creatures[getRandomIndex(creatures.length)],
	}
}
