import { Task } from "@prisma/client"
import { atom, selector } from "recoil"

export const taskEarnedState = atom({ key: "taskEarned", default: 0 })

export const tasksState = atom<Task[]>({ key: "tasks", default: [] })

export const taskIndexState = atom({ key: "taskIndex", default: 0 })

export const currentTaskState = selector({
	key: "currentTask",
	get: ({ get }) => {
		const index = get(taskIndexState)
		const tasks = get(tasksState)
		return tasks[index]
	},
})
