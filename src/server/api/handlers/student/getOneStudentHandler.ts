import { prisma } from "@/server/db"
import { publicProcedure } from "../../trpc"
import { StudentInputSchema } from "@/schemas/StudentSchema"

export const getOneStudentHandler = publicProcedure
	.input(StudentInputSchema)
	.query(({ input }) => {
		return prisma.student.findUnique({ where: { id: input.id } })
	})
