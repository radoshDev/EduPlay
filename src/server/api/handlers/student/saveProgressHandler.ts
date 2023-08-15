import { StudentProgressInputSchema } from "@/schemas/StudentSchema"
import dayjs from "dayjs"
import { protectedProcedure } from "../../trpc"
import { errorHandler } from "../errorHandler"
import { prisma } from "@/server/db"

const saveProgressHandler = protectedProcedure
	.input(StudentProgressInputSchema)
	.mutation(async ({ input }) => {
		try {
			const { studentId } = input
			const today = dayjs().format("DD-MM-YYYY")
			const existProgress = await prisma.dailyProgress.findUnique({
				where: { studentId_date: { date: today, studentId } },
			})
			if (!existProgress) {
				return prisma.dailyProgress.create({
					data: { date: today, studentId, value: 1 },
				})
			}
			return prisma.dailyProgress.update({
				where: { studentId_date: { date: today, studentId } },
				data: { value: existProgress.value + 1 },
			})
		} catch (error) {
			errorHandler(error)
		}
	})

export default saveProgressHandler
