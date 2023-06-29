import { createTRPCContext } from "@/server/api/context"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { appRouter } from "@/server/api/routers/root"
import { env } from "@/env.mjs"

const handler = (req: Request) => {
	return fetchRequestHandler({
		endpoint: "/api/trpc",
		req,
		router: appRouter,
		createContext: createTRPCContext,
		onError:
			env.NODE_ENV === "development"
				? ({ path, error }) => {
						console.error(
							`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
						)
				  }
				: undefined,
	})
}

export const GET = handler
export const POST = handler
