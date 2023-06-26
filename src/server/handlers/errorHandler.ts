import { TRPCError } from "@trpc/server"

export const errorHandler = (_error: unknown): void => {
	const error = _error as TRPCError
	const code = error.code || "BAD_REQUEST"
	const message = error.message
	throw new TRPCError({ code, message })
}
