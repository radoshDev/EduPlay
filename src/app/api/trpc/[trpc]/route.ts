import { createContext } from "@/server/context"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { appRouter } from "@/server/routers/_app"

const handler = (req: Request) => {
	console.log(`incoming request ${req.url}`)
	return fetchRequestHandler({
		endpoint: "/api/trpc",
		req,
		router: appRouter,
		createContext,
	})
}

export const GET = handler
export const POST = handler
