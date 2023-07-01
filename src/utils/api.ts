import { AppRouter } from "@/server/api/routers/root"
import { httpBatchLink } from "@trpc/client"
import superJSON from "superjson"
import { createTRPCReact } from "@trpc/react-query"

const getBaseUrl = () => {
	if (typeof window !== "undefined") return "" // browser should use relative url
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url
	return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

export const api = createTRPCReact<AppRouter>()

export const trpcClient = api.createClient({
	transformer: superJSON,
	links: [
		httpBatchLink({
			url: `${getBaseUrl()}/api/trpc`,
		}),
	],
})
