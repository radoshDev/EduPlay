import { z } from "zod"
import { authProcedure } from "../middleware/authMiddleware"
import { router } from "../trpc"
import { prisma } from "@/server/prisma"

export const userRouter = router({
	getUsers: authProcedure
		.input(z.object({ accountId: z.string() }))
		.query(async ({ input }) => {
			const user = await prisma.users.findMany({
				where: { accountId: input.accountId },
			})
			return user
		}),
})
