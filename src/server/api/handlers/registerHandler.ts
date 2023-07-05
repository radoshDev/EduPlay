import { RegisterSchema } from "@/schemas/AuthSchema"
import { publicProcedure } from "../trpc"
import { prisma } from "@/server/db"
import { hash } from "bcryptjs"
import { TRPCError } from "@trpc/server"
import { errorHandler } from "./errorHandler"

export const registerHandler = publicProcedure
	.input(RegisterSchema)
	.mutation(async ({ input }) => {
		try {
			const { email, name, password } = input
			const hashPassword = await hash(password, 12)
			const existUser = await prisma.user.findUnique({ where: { email } })
			if (!existUser) {
				const user = await prisma.user.create({ data: { email, name } })
				await prisma.account.create({
					data: {
						provider: "credentials",
						providerAccountId: user.id,
						userId: user.id,
						password: hashPassword,
					},
				})
				return { message: "The user has been registered" }
			}

			const existAccount = await prisma.account.findFirst({
				where: { userId: existUser.id, provider: "credentials" },
			})
			if (existAccount) {
				throw new TRPCError({
					code: "CONFLICT",
					message: "A user with this account already exists",
				})
			}
			await prisma.account.create({
				data: {
					provider: "credentials",
					providerAccountId: existUser.id,
					userId: existUser.id,
					password: hashPassword,
				},
			})
			return { message: "The user has been registered" }
		} catch (error) {
			errorHandler(error)
		}
	})
