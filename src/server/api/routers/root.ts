import { createTRPCRouter } from "../trpc"
import { creatureRouter } from "./creatureRouter"
import studentRouter from "./studentRouter"
import { registerHandler } from "../handlers/registerHandler"
import { libraryRouter } from "./libraryRouter"

export const appRouter = createTRPCRouter({
	creature: creatureRouter,
	register: registerHandler,
	student: studentRouter,
	library: libraryRouter,
})

export type AppRouter = typeof appRouter
