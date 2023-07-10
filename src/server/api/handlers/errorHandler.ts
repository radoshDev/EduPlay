import { TRPCError } from "@trpc/server"

export const errorHandler = (_error: unknown): void => {
	console.error("errorHandler", _error)

	const error = _error as TRPCError
	const code = error.code || "BAD_REQUEST"
	const message = error.message
	throw new TRPCError({ code, message })
}
