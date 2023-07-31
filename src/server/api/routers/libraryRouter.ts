import { addTaskCategoryHandler } from "../handlers/library/addTaskCategoryHandler"
import { addTaskHandler } from "../handlers/library/addTaskHandler"
import { addTaskSubcategoryHandler } from "../handlers/library/addTaskSubcategoryHandler"
import { updateTaskHandler } from "../handlers/library/updateTaskHandler"
import { createTRPCRouter } from "../trpc"

export const libraryRouter = createTRPCRouter({
	addTaskCategory: addTaskCategoryHandler,
	addTaskSubcategory: addTaskSubcategoryHandler,
	addTask: addTaskHandler,
	updateTask: updateTaskHandler,
})
