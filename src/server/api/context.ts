import * as trpc from "@trpc/server"
import { type Session } from "next-auth"
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"
import { getServerAuthSession } from "../auth"
import { prisma } from "@/server/db"

type CreateContextOptions = {
	session: Session | null
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
	return {
		session: opts.session,
		prisma,
	}
}

export const createTRPCContext = async (opts: FetchCreateContextFnOptions) => {
	console.log("createContext req", opts.req)
	console.log("createContext req", opts.resHeaders)
	const session = await getServerAuthSession()
	return createInnerTRPCContext({ session })
}

export type Context = trpc.inferAsyncReturnType<typeof createTRPCContext>
