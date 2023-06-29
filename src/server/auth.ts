import { prisma } from "@/server/db"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { type GetServerSidePropsContext } from "next"
import {
	getServerSession,
	type DefaultSession,
	type NextAuthOptions,
} from "next-auth"
import { AppProviders } from "next-auth/providers"
import { compare } from "bcryptjs"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import { env } from "@/env.mjs"

declare module "next-auth" {
	interface Session extends DefaultSession {
		user: {
			id: string
			// ...other properties
			// role: UserRole;
		} & DefaultSession["user"]
	}

	// interface User {
	//   // ...other properties
	//   // role: UserRole;
	// }
}

const credentialsProvider = CredentialsProvider({
	name: "Credentials",
	credentials: {
		email: { label: "Email", type: "text", placeholder: "jsmith" },
		password: { label: "Password", type: "password" },
	},
	async authorize(credentials) {
		if (!credentials) return null

		const { email, password } = credentials

		if (!email || !password) return null

		const user = await prisma.user.findUnique({ where: { email } })

		if (!user?.password) return null

		const isPwdMatch = await compare(user.password, password)

		if (!isPwdMatch) return null

		return user
	},
})
const githubProvider = GithubProvider({
	clientId: env.GITHUB_CLIENT_ID,
	clientSecret: env.GITHUB_CLIENT_SECRET,
})

const providers: AppProviders = [credentialsProvider, githubProvider]

export const authOptions: NextAuthOptions = {
	callbacks: {
		session: ({ session, user }) => ({
			...session,
			user: {
				...session.user,
				id: user.id,
			},
		}),
	},
	adapter: PrismaAdapter(prisma),
	providers,
}

export const getServerAuthSession = (/*ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}*/) => {
	return getServerSession(/*ctx.req, ctx.res, */ authOptions)
}
