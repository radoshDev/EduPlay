import { prisma } from "@/server/db"
import { publicProcedure } from "../../trpc"

const getCreatureCategoriesHandler = publicProcedure.query(() => {
	return prisma.creatureCategory.findMany({
		orderBy: { slug: "asc" },
	})
})

export default getCreatureCategoriesHandler
