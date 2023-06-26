import { z } from "zod"
import { publicProcedure, router } from "../trpc"
import { authProcedure } from "../middleware/authMiddleware"

export const creatureRouter = router({
	getCreature: publicProcedure
		.input(z.object({ id: z.string() }))
		.query(({ input }) => `Creature with ID: ${input.id}`),
	newCreature: authProcedure
		.input(z.object({ id: z.string(), name: z.string() }))
		.mutation(({ input }) => {
			console.log("New Craeature has been created", input)
			return `Created with ID: ${input.id}`
		}),
})
