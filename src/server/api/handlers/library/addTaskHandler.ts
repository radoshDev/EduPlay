import { TaskSchema } from "@/schemas/TaskSchema"
import { adminProcedure } from "../../trpc"
import { prisma } from "@/server/db"
import { errorHandler } from "../errorHandler"

export const addTaskHandler = adminProcedure
	.input(TaskSchema)
	.mutation(async ({ input }) => {
		try {
			console.log("addTaskHandler", input)

			const result = await prisma.task.create({ data: input })
			return { message: `Task with '${result.value}' has been created` }
		} catch (error) {
			errorHandler(error)
		}
	})
