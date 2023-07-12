import { ImportSchema } from "@/schemas/RootSchema"
import { adminProcedure } from "../../trpc"
import csvParser from "@/helpers/csvParser"
import { Task } from "@prisma/client"
import { prisma } from "@/server/db"
import { errorHandler } from "../errorHandler"

export const importTasksHandler = adminProcedure
	.input(ImportSchema)
	.mutation(async ({ input }) => {
		try {
			const base64 = input.base64File.split(",")[1]
			const csvString = Buffer.from(base64, "base64").toString("utf-8")
			const list = csvParser<keyof Task>(csvString)
			const result = await prisma.task.createMany({ data: list })

			return { message: `${result.count} creatures have been created!` }
		} catch (error) {
			errorHandler(error)
		}
	})
