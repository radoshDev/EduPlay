import { configureStore } from "@reduxjs/toolkit"
import { taskSlice } from "./features/task/taskSlice"
import { studentSlice } from "./features/student/studentSlice"

export const store = configureStore({
	reducer: {
		[taskSlice.name]: taskSlice.reducer,
		[studentSlice.name]: studentSlice.reducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
