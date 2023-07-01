import { z } from "zod"
import { publicProcedure, createTRPCRouter, protectedProcedure } from "../trpc"
import { CreatureCategorySchema } from "@/schemas/CreatureSchema"
import slugify from "slugify"
import { errorHandler } from "../handlers/errorHandler"
import { TRPCError } from "@trpc/server"
import { prisma } from "@/server/db"

export const creatureRouter = createTRPCRouter({
	getCreature: publicProcedure
		.input(z.object({ id: z.string() }))
		.query(({ input }) => `Creature with ID: ${input.id}`),
	newCreature: protectedProcedure
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
		}),
})
