import { z } from "zod"
import { publicProcedure, createTRPCRouter, protectedProcedure } from "../trpc"

export const creatureRouter = createTRPCRouter({
	getCreature: publicProcedure
		.input(z.object({ id: z.string() }))
		.query(({ input }) => `Creature with ID: ${input.id}`),
	newCreature: protectedProcedure
		.input(z.object({ id: z.string(), name: z.string() }))
		.mutation(({ input }) => {
			console.log("New Craeature has been created", input)
			return `Created with ID: ${input.id}`
		}),
})
