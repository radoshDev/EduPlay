import { StudentSchema } from "@/schemas/StudentSchema"
import { protectedProcedure } from "@/server/api/trpc"
import { prisma } from "@/server/db"

export const addStudentHandler = protectedProcedure
	.input(StudentSchema)
	.mutation(({ input, ctx }) => {
		return prisma.student.create({
			data: { ...input, userId: ctx.session!.user.id },
		})
	})
