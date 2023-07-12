import { TRPCError } from "@trpc/server"

export const errorHandler = (_error: unknown): void => {
	const error = _error as TRPCError
	const code = error.code || "BAD_REQUEST"
	if ((code as any) === "P2002") {
		throw new TRPCError({
			code: "CONFLICT",
			message: "This value already exist, maybe...",
		})
	}
	const message = error.message.slice(0, 50)
	console.error("errorHandler", error, code, message)
	throw new TRPCError({ code, message })
}
