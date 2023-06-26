import * as trpc from "@trpc/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/client/config/auth"

export const createContext = async ({ req }: any) => {
	console.log("crateContext res", req.method)
	try {
		const session = await getServerSession(authOptions)
		console.log("!!! createContext session:", session)
		console.log("!!! createContext for", session?.user?.name ?? "UNKNOWN user")
		return { session }
	} catch (error) {
		return {
			session: null,
		}
	}
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
