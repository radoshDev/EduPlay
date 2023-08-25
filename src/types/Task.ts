import { Creature, Task } from "@prisma/client"

export type TaskRound = {
	showResetModal: boolean
	index: number
	earned: number
	roundLength: number
	roundTasks: Task[]
	creature: Creature
}

export type TaskState = {
	tasks: Task[]
	creatures: Creature[]
	taskType: string | null
	studentId: string
	studentProgress: Partial<Record<string, Record<string, TaskRound>>>
}
