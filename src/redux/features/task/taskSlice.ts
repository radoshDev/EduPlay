import { createSlice } from "@reduxjs/toolkit"
import { TaskState } from "@/types/Task"
import { initiateTaskReducer } from "./reducers/initiateTaskReducer"
import { updateTaskIndexReducer } from "./reducers/updateTaskIndexReducer"
import { nextRoundReducer } from "./reducers/nextRoundReducer"
import { resetTaskReducer } from "./reducers/resetTaskReducer"
import { hideResetModalReducer } from "./reducers/hideResetModalReducer"

const initialState: TaskState = {
	tasks: [],
	creatures: [],
	taskType: null,
	studentId: "unknown",
	studentProgress: {},
}

export const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		initiateTask: initiateTaskReducer,
		updateTaskIndex: updateTaskIndexReducer,
		nextRound: nextRoundReducer,
		resetTask: resetTaskReducer,
		hideResetModal: hideResetModalReducer,
	},
})

// Action creators are generated for each case reducer function
export const {
	initiateTask,
	updateTaskIndex,
	nextRound,
	resetTask,
	hideResetModal,
} = taskSlice.actions
