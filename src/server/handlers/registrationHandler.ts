import { publicProcedure } from "../trpc"
import { hash } from "bcryptjs"
import { TRPCError } from "@trpc/server"
import { prisma } from "@/server/prisma"
import { AuthSchema } from "@/schemas/AuthSchema"
import { errorHandler } from "./errorHandler"

const registrationHandler = publicProcedure
	.input(AuthSchema)
	.mutation(async ({ input }) => {
		try {
			const { email, password } = input
			const hashedPwd = await hash(password, 12)
			const existUser = await prisma.accounts.findUnique({ where: { email } })
			if (existUser)
				throw new TRPCError({
					code: "CONFLICT",
					message: "This email already taken",
				})
			const user = await prisma.accounts.create({
				data: { email, password: hashedPwd },
			})
			return user
		} catch (_error) {
			errorHandler(_error)
		}
	})

export default registrationHandler
