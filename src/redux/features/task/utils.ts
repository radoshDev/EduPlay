import { TaskState } from "@/types/Task"

export function getCurrentTask(state: TaskState) {
	const { studentId, taskType } = state
	if (!studentId || !taskType) return
	return state.studentProgress[studentId]?.[taskType]
}
