import { z } from "zod"
import { publicProcedure, createTRPCRouter } from "../trpc"
import { creatureRouter } from "./creatureRouter"

export const appRouter = createTRPCRouter({
	addUser: publicProcedure
		.input(z.object({ name: z.string() }))
		.mutation(({ input }) => {
			console.log("user adding:", input)
			return `User ${input.name} has been added!`
		}),
	creature: creatureRouter,
})

export type AppRouter = typeof appRouter
