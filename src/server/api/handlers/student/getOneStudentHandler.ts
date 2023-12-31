import { prisma } from "@/server/db"
import { publicProcedure } from "../../trpc"
import { StudentInputSchema } from "@/schemas/StudentSchema"

const getOneStudentHandler = publicProcedure
	.input(StudentInputSchema)
	.query(({ input }) => {
		return prisma.student.findUnique({ where: { id: input.id } })
	})

export default getOneStudentHandler
