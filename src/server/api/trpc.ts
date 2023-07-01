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

const adminMiddleware = t.middleware(({ next, ctx }) => {
	console.log("AuthMid", ctx)
	const { session } = ctx
	if (!session || !session.user) {
		throw new TRPCError({ code: "UNAUTHORIZED" })
	}
	console.log("adminMiddleware", session.user)

	if (session.user.role !== "admin") {
		throw new TRPCError({ code: "FORBIDDEN" })
	}
	return next({ ctx })
})

export const protectedProcedure = t.procedure.use(adminMiddleware)
