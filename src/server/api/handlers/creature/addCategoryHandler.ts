import { CreatureCategorySchema } from "@/schemas/CreatureSchema"
import { protectedProcedure } from "@/server/api/trpc"
import { prisma } from "@/server/db"
import { TRPCError } from "@trpc/server"
import slugify from "slugify"
import { errorHandler } from "../errorHandler"

const addCategoryHandler = protectedProcedure
	.input(CreatureCategorySchema)
	.mutation(async ({ input }) => {
		try {
			const { imageUrl, title, description } = input
			const slug = slugify(title)
			const existCategory = await prisma.creatureCategory.findUnique({
				where: { slug },
			})

			if (existCategory) throw new TRPCError({ code: "CONFLICT" })

			const category = await prisma.creatureCategory.create({
				data: { slug, title, description, imageUrl },
			})

			return category
		} catch (error) {
			errorHandler(error)
		}
	})

export default addCategoryHandler
