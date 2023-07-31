import importCreaturesHandler from "../handlers/import/importCreaturesHandler"
import { importTasksHandler } from "../handlers/import/importTasksHandler"
import { createTRPCRouter } from "../trpc"

export const importRouter = createTRPCRouter({
	importCreatures: importCreaturesHandler,
	importTasks: importTasksHandler,
})
