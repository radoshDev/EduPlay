import { AppRouter } from "@/server/routers/_app"
import { httpBatchLink } from "@trpc/client"
import { createTRPCReact } from "@trpc/react-query"

const url = "http://localhost:3000/api/trpc"

export const trpc = createTRPCReact<AppRouter>()

export const trpcClient = trpc.createClient({
	links: [
		httpBatchLink({
			url,
		}),
	],
})
