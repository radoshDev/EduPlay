import { createTRPCRouter } from "../trpc"
import { creatureRouter } from "./creatureRouter"
import studentRouter from "./studentRouter"
import { registerHandler } from "../handlers/registerHandler"

export const appRouter = createTRPCRouter({
	register: registerHandler,
	student: studentRouter,
	creature: creatureRouter,
})

export type AppRouter = typeof appRouter
