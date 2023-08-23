import { CreatureGetSchema } from "@/schemas/CreatureSchema"
import { publicProcedure } from "@/server/api/trpc"
import { prisma } from "@/server/db"

const getOneCreatureHandler = publicProcedure
	.input(CreatureGetSchema)
	.query(({ input }) => {
		return prisma.creature.findUnique({ where: { id: input.id } })
	})

export default getOneCreatureHandler
