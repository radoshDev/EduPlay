import { RootState } from "@/redux/store"

export function getCurrentTask(state: RootState["task"]) {
	const { studentId, taskType } = state
	if (!studentId || !taskType) return
	return state.studentProgress[studentId][taskType]
}
