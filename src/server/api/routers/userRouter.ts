import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const userRouter = createTRPCRouter({
	getUsers: protectedProcedure
		.input(z.object({ userId: z.string() }))
		.query(({ input, ctx }) => {
			return ctx.prisma.student.findMany({
				where: { userId: input.userId },
			})
		}),
})
