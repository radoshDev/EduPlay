import { prisma } from "@/server/db"
import { protectedProcedure } from "../../trpc"

export const getStudentsHandler = protectedProcedure.query(({ ctx }) => {
	return prisma.student.findMany({
		where: { userId: ctx.session!.user.id },
		orderBy: { name: "asc" },
	})
})
