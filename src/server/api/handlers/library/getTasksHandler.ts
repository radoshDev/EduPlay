import { TasksGetSchema } from "@/schemas/TaskSchema"
import { publicProcedure } from "../../trpc"
import { getTasks } from "@/utils/getTasks"

export const getTasksHandler = publicProcedure
	.input(TasksGetSchema)
	.query(({ input }) => getTasks(input))
