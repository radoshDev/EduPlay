import { prisma } from "@/server/db"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {
	getServerSession,
	type DefaultSession,
	type NextAuthOptions,
} from "next-auth"
import { AppProviders } from "next-auth/providers"
import GithubProvider from "next-auth/providers/github"
import { env } from "@/env.mjs"
import { User as PUser } from "@prisma/client"

declare module "next-auth" {
	// eslint-disable-next-line no-unused-vars
	interface Session extends DefaultSession {
		user: {
			id: string
			role: PUser["role"]
		} & DefaultSession["user"]
	}
	// eslint-disable-next-line no-unused-vars
	interface User {
		// ...other properties
		role: PUser["role"]
	}
}

const githubProvider = GithubProvider({
	clientId: env.GITHUB_CLIENT_ID,
	clientSecret: env.GITHUB_CLIENT_SECRET,
})

const providers: AppProviders = [githubProvider]

export const authOptions: NextAuthOptions = {
	callbacks: {
		session: ({ session, user }) => ({
			...session,
			user: {
				...session.user,
				id: user.id,
				role: user.role,
			},
		}),
	},
	adapter: PrismaAdapter(prisma),
	providers,
}

export const getServerAuthSession = () => {
	return getServerSession(authOptions)
}
