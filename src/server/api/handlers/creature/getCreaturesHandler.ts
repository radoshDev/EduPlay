import { prisma } from "@/server/db"
import { publicProcedure } from "../../trpc"

const getCreaturesHandler = publicProcedure.query(() => {
	return prisma.creature.findMany()
})

export default getCreaturesHandler
