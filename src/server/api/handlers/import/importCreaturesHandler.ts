import csvParser from "@/helpers/csvParser"
import { adminProcedure } from "@/server/api/trpc"
import { prisma } from "@/server/db"
import { Creature } from "@prisma/client"
import { errorHandler } from "../errorHandler"
import { ImportSchema } from "@/schemas/RootSchema"

const importCreaturesHandler = adminProcedure
	.input(ImportSchema)
	.mutation(async ({ input }) => {
		try {
			const base64 = input.base64File.split(",")[1]
			const csvString = Buffer.from(base64, "base64").toString("utf-8")
			const list = csvParser<keyof Creature>(csvString)
			const result = await prisma.creature.createMany({ data: list })

			return { message: `${result.count} creatures have been created!` }
		} catch (error) {
			errorHandler(error)
		}
	})

export default importCreaturesHandler
