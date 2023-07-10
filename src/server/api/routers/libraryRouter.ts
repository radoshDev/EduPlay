import { addTaskCategoryHandler } from "../handlers/library/addTaskCategoryHandler"
import { createTRPCRouter } from "../trpc"

export const libraryRouter = createTRPCRouter({
	addTaskCategory: addTaskCategoryHandler,
})
