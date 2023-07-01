import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "../trpc"
import { prisma } from "@/server/db"

export const userRouter = createTRPCRouter({
	getUsers: protectedProcedure
		.input(z.object({ userId: z.string() }))
		.query(({ input }) => {
			return prisma.student.findMany({
				where: { userId: input.userId },
			})
		}),
})
