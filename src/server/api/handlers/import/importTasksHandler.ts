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
			const count = { added: 0, skipped: [] as string[] }
			const base64 = input.base64File.split(",")[1]
			const csvString = Buffer.from(base64, "base64").toString("utf-8")
			const list = csvParser<keyof Task>(csvString)
			for (const task of list) {
				try {
					await prisma.task.create({ data: task })
					count.added++
				} catch (error) {
					count.skipped.push(task.value)
				}
			}

			return {
				message: `Tasks added: ${count.added}. Skipped: ${count.skipped.join(
					" | "
				)}`,
			}
		} catch (error) {
			errorHandler(error)
		}
	})
