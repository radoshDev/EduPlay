import { createTRPCRouter } from "../trpc"
import { creatureRouter } from "./creatureRouter"
import studentRouter from "./studentRouter"
import { registerHandler } from "../handlers/registerHandler"

export const appRouter = createTRPCRouter({
	creature: creatureRouter,
	register: registerHandler,
	student: studentRouter,
})

export type AppRouter = typeof appRouter
