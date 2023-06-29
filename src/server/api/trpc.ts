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

const authMid = t.middleware(async ({ next, ctx }) => {
	console.log("AuthMid", ctx)
	const { session } = ctx
	if (!session || !session.user) {
		throw new TRPCError({ code: "UNAUTHORIZED" })
	}
	return next({
		ctx: {
			session: { ...session, user: session.user },
		},
	})
})

export const protectedProcedure = t.procedure.use(authMid)
