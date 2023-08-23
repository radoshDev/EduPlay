import { addTaskCategoryHandler } from "../handlers/library/addTaskCategoryHandler"
import { addTaskHandler } from "../handlers/library/addTaskHandler"
import { addTaskSubcategoryHandler } from "../handlers/library/addTaskSubcategoryHandler"
import { getTasksHandler } from "../handlers/library/getTasksHandler"
import { updateTaskHandler } from "../handlers/library/updateTaskHandler"
import { createTRPCRouter } from "../trpc"

export const libraryRouter = createTRPCRouter({
	getTasks: getTasksHandler,
	addTaskCategory: addTaskCategoryHandler,
	addTaskSubcategory: addTaskSubcategoryHandler,
	addTask: addTaskHandler,
	updateTask: updateTaskHandler,
})
