import format from "date-fns/format"
import { StudentProgressInputSchema } from "@/schemas/StudentSchema"
import { protectedProcedure } from "../../trpc"
import { errorHandler } from "../errorHandler"
import { prisma } from "@/server/db"

const saveProgressHandler = protectedProcedure
	.input(StudentProgressInputSchema)
	.mutation(async ({ input }) => {
		try {
			const { studentId, roundLength, action } = input
			const today = format(new Date(), "dd-MM-yyyy")
			const existProgress = await prisma.dailyProgress.findUnique({
				where: { studentId_date: { date: today, studentId } },
			})
			if (!existProgress) {
				return prisma.dailyProgress.create({
					data: {
						date: today,
						studentId,
						value: action === "add" ? roundLength : 0,
					},
				})
			}
			const newValue =
				existProgress.value + (action === "add" ? roundLength : -roundLength)
			return prisma.dailyProgress.update({
				where: { studentId_date: { date: today, studentId } },
				data: {
					value: newValue,
				},
			})
		} catch (error) {
			errorHandler(error)
		}
	})

export default saveProgressHandler
