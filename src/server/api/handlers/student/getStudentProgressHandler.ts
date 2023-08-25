import compareAsc from "date-fns/compareAsc"
import parseDate from "date-fns/parse"
import { StudentInputSchema } from "@/schemas/StudentSchema"
import { publicProcedure } from "@/server/api/trpc"
import { prisma } from "@/server/db"

const getStudentProgressHandler = publicProcedure
	.input(StudentInputSchema)
	.query(async ({ input }) => {
		const progress = await prisma.dailyProgress.findMany({
			where: { studentId: input.id },
		})
		const sortedProgress = progress.sort((a, b) =>
			compareAsc(
				parseDate(a.date, "dd-MM-yyyy", new Date()),
				parseDate(b.date, "dd-MM-yyyy", new Date())
			)
		)
		return sortedProgress
	})

export default getStudentProgressHandler
