import SuperJSON from "superjson"
import { Context } from "./context"
import { initTRPC, TRPCError } from "@trpc/server"
import { ZodError } from "zod"

const t = initTRPC.context<Context>().create({
	transformer: SuperJSON,
	errorFormatter({ shape, error }) {
		return {
			...shape,
			data: {
				...shape.data,
				zodError:
					error.cause instanceof ZodError ? error.cause.flatten() : null,
			},
		}
	},
})

export const createTRPCRouter = t.router

export const publicProcedure = t.procedure

const authMiddleware = t.middleware(({ next, ctx }) => {
	if (!ctx.session?.user) {
		throw new TRPCError({ code: "UNAUTHORIZED" })
	}
	return next({ ctx })
})

export const protectedProcedure = publicProcedure.use(authMiddleware)

const adminMiddleware = t.middleware(({ next, ctx }) => {
	const { session } = ctx
	if (session?.user.role !== "admin") {
		throw new TRPCError({ code: "FORBIDDEN" })
	}
	return next({ ctx })
})

export const adminProcedure = protectedProcedure.use(adminMiddleware)
