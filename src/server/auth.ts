import { prisma } from "@/server/db"
import { compare } from "bcryptjs"
import {
	getServerSession,
	type DefaultSession,
	type NextAuthOptions,
} from "next-auth"
import { AppProviders } from "next-auth/providers"
import CredentialsProvider from "next-auth/providers/credentials"
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
const credentialsProvider = CredentialsProvider({
	name: "Credentials",
	credentials: {
		email: { label: "Email", type: "text", placeholder: "example@example.com" },
		password: { label: "Password", type: "password" },
	},
	authorize: async credentials => {
		if (!credentials?.email || !credentials.password) return null

		const { email, password } = credentials
		const user = await prisma.user.findUnique({
			where: { email },
		})

		if (!user) throw new Error("The user doesn't exist with the provided email")

		const account = await prisma.account.findFirst({
			where: { userId: user.id, provider: "credentials" },
		})

		if (!account?.password) {
			throw new Error("User is not registered using credentials")
		}

		const isPwdCompare = await compare(password, account.password)

		if (!isPwdCompare) throw new Error("Incorrect password")

		return user
	},
})
const githubProvider = GithubProvider({
	clientId: env.GITHUB_CLIENT_ID,
	clientSecret: env.GITHUB_CLIENT_SECRET,
})

const providers: AppProviders = [credentialsProvider, githubProvider]

export const authOptions: NextAuthOptions = {
	pages: {
		signIn: "/login",
	},
	session: {
		strategy: "jwt",
	},
	callbacks: {
		signIn: async params => {
			try {
				const { account, user } = params
				if (!user.email || !account) return false

				if (account.provider === "credentials") return true

				const existUser = await prisma.user.findUnique({
					where: { email: user.email },
				})

				if (!existUser) {
					const newUser = await prisma.user.create({
						data: { email: user.email, name: user.name, image: user.image },
					})
					await prisma.account.create({
						data: {
							provider: account.provider,
							providerAccountId: account.providerAccountId,
							userId: newUser.id,
						},
					})
					return true
				}

				const existAccount = await prisma.account.findUnique({
					where: {
						userId_provider: {
							provider: account.provider,
							userId: existUser.id,
						},
					},
				})

				if (!existAccount) {
					await prisma.account.create({
						data: {
							provider: account.provider,
							providerAccountId: account.providerAccountId,
							userId: existUser.id,
						},
					})
					return true
				}

				return true
			} catch (error) {
				console.error("SignIn Callback error:", error)
				return false
			}
		},
		jwt: async ({ token, user, account }) => {
			if (!user?.email) return token

			if (account?.provider === "credentials") {
				return { ...token, role: user.role, id: user.id }
			}

			const existUser = await prisma.user.findUnique({
				where: { email: user.email },
			})

			return { ...token, role: existUser?.role, id: existUser?.id }
		},
		session: ({ session, token }) => ({
			...session,
			user: {
				...session.user,
				id: token.id,
				role: token.role,
			},
		}),
	},
	providers,
}

export const getServerAuthSession = () => {
	return getServerSession(authOptions)
}
