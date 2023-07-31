import * as trpc from "@trpc/server"
// import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"
import { getServerAuthSession } from "../auth"

export const createTRPCContext =
	async (/*opts: FetchCreateContextFnOptions*/) => {
		const session = await getServerAuthSession()
		return { session }
	}

export type Context = trpc.inferAsyncReturnType<typeof createTRPCContext>
