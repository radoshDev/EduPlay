import { StudentSchema } from "@/schemas/StudentSchema"
import { protectedProcedure } from "@/server/api/trpc"
import { prisma } from "@/server/db"
import { errorHandler } from "../errorHandler"

export const updateStudentHandler = protectedProcedure
	.input(StudentSchema)
	.mutation(async ({ input }) => {
		try {
			return prisma.student.update({
				where: { id: input.id },
				data: input,
			})
		} catch (error) {
			errorHandler(error)
		}
	})
