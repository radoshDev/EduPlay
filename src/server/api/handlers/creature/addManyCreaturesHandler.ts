import csvParser from "@/helpers/csvParser"
import { CreaturesAddManySchema } from "@/schemas/CreatureSchema"
import { protectedProcedure } from "@/server/api/trpc"
import { prisma } from "@/server/db"
import { Creature } from "@prisma/client"
import { errorHandler } from "../errorHandler"

const addManyCreaturesHandler = protectedProcedure
	.input(CreaturesAddManySchema)
	.mutation(async ({ input }) => {
		try {
			const base64 = input.base64File.split(",")[1]
			const csvString = Buffer.from(base64, "base64").toString("utf-8")
			const list = csvParser<keyof Creature>(csvString)
			const result = await prisma.creature.createMany({ data: list })
			result.count
			return { message: `${result.count} creatures have been created!` }
		} catch (error) {
			errorHandler(error)
		}
	})

export default addManyCreaturesHandler
