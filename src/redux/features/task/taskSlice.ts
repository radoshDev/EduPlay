import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { Task, Creature } from "@prisma/client"
import { generateUniqueList } from "@/helpers/generateUniqueList"
import { getCurrentTask } from "./utils"
import { getRandomIndex } from "@/helpers/getRandomIndex"

type TaskRound = {
	inProgress: boolean
	index: number
	earned: number
	roundLength: number
	roundTasks: Task[]
	creature: Creature
}

type InitiateTaskPayload = PayloadAction<{
	studentId: string
	taskType: string
	tasks: Task[]
	roundLength: number
	creatures: Creature[]
}>

const initialState = {
	tasks: [] as Task[],
	creatures: [] as Creature[],
	taskType: null as string | null,
	studentId: null as string | null,
	studentProgress: {} as Record<string, Record<string, TaskRound>>,
}

export type TaskState = typeof initialState

export const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		initiateTask(state, action: InitiateTaskPayload) {
			const { studentId, taskType, tasks, roundLength, creatures } =
				action.payload
			state.taskType = taskType
			state.tasks = tasks
			state.creatures = creatures
			state.studentId = studentId
			if (!state.studentProgress[studentId]) {
				state.studentProgress[studentId] = {}
			}

			if (state.studentProgress[studentId][taskType]) {
				state.studentProgress[studentId][taskType].inProgress = true
			} else {
				state.studentProgress[studentId][taskType] = {
					inProgress: false,
					earned: 0,
					index: 0,
					roundLength,
					roundTasks: generateUniqueList(state.tasks, roundLength),
					creature: creatures[getRandomIndex(creatures.length)],
				}
			}
		},
		updateTaskIndex(state, action: PayloadAction<"increment" | "decrement">) {
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
		},
		nextRound(state) {
			const currentTask = getCurrentTask(state)
			if (!currentTask) return
			currentTask.index = 0
			currentTask.roundTasks = generateUniqueList(
				state.tasks,
				currentTask.roundLength
			)
			currentTask.creature =
				state.creatures[getRandomIndex(state.creatures.length)]
		},
		resetTask(state) {
			const currentTask = getCurrentTask(state)
			const { creatures } = state
			if (!currentTask) return

			currentTask.earned = 0
			currentTask.index = 0
			currentTask.inProgress = false
			currentTask.roundTasks = generateUniqueList(
				state.tasks,
				currentTask.roundLength
			)
			currentTask.creature = creatures[getRandomIndex(creatures.length)]
		},
	},
})

// Action creators are generated for each case reducer function
export const { initiateTask, updateTaskIndex, nextRound, resetTask } =
	taskSlice.actions
