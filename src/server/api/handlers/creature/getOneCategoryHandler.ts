import { prisma } from "@/server/db"
import { publicProcedure } from "../../trpc"
import { CreatureCategoryGetSchema } from "@/schemas/CreatureSchema"

const getOneCategoryHandler = publicProcedure
	.input(CreatureCategoryGetSchema)
	.query(({ input }) => {
		return prisma.creatureCategory.findUnique({
			where: { slug: input.slug },
		})
	})

export default getOneCategoryHandler
