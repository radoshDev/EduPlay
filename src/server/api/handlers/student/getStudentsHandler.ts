import { prisma } from "@/server/db"
import { protectedProcedure } from "../../trpc"
import { getServerAuthSession } from "@/server/auth"

export const getStudentsHandler = protectedProcedure.query(({ ctx }) => {
	return prisma.student.findMany({
		where: { userId: ctx.session!.user.id },
	})
})

export const getStudentsServer = async () => {
	const session = await getServerAuthSession()
	const userId = session!.user.id
	return prisma.student.findMany({ where: { userId } })
}
