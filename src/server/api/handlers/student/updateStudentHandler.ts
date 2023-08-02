import { StudentSchema } from "@/schemas/StudentSchema"
import { protectedProcedure } from "@/server/api/trpc"
import { prisma } from "@/server/db"
import { errorHandler } from "../errorHandler"

export const updateStudentHandler = protectedProcedure
	.input(StudentSchema)
	.mutation(async ({ input }) => {
		try {
			const result = await prisma.student.update({
				where: { id: input.id },
				data: input,
			})
			return { message: `Student with ID: ${result.id} has been updated` }
		} catch (error) {
			errorHandler(error)
		}
	})
