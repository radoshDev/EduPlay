import { TaskUpdateSchema } from "@/schemas/TaskSchema"
import { adminProcedure } from "../../trpc"
import { prisma } from "@/server/db"

export const updateTaskHandler = adminProcedure
	.input(TaskUpdateSchema)
	.mutation(async ({ input }) => {
		try {
			const result = await prisma.task.update({
				where: { id: input.id },
				data: input,
			})
			return { message: `Task with ID '${result.id}' has been updated` }
		} catch (error) {}
	})
