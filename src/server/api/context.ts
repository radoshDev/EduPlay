import * as trpc from "@trpc/server"
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"
import { getServerAuthSession } from "../auth"

export const createTRPCContext = async (opts: FetchCreateContextFnOptions) => {
	console.log("createContext req", opts.resHeaders)
	const session = await getServerAuthSession()
	console.log("createContext session", session?.user.role)
	return { session }
}

export type Context = trpc.inferAsyncReturnType<typeof createTRPCContext>
