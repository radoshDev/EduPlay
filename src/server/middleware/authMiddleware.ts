import { TRPCError } from "@trpc/server"
import { middleware, publicProcedure } from "../trpc"

const authMid = middleware(async ({ next, ctx }) => {
	console.log("AuthMid", ctx)
	const { session } = ctx
	if (!session) {
		throw new TRPCError({ code: "UNAUTHORIZED" })
	}
	try {
		return next({
			ctx: {
				userId: "TEST_UID",
			},
		})
	} catch (error) {
		console.log("authMid: 'decoded error'")

		throw new TRPCError({ code: "UNAUTHORIZED" })
	}
})

export const authProcedure = publicProcedure.use(authMid)
