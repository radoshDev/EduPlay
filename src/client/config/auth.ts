import { prisma } from "@/server/prisma"
import type { NextAuthOptions } from "next-auth"
import { AppProviders } from "next-auth/providers"
import { compare } from "bcryptjs"
import CredentialsProvider from "next-auth/providers/credentials"

const credentialsProvider = CredentialsProvider({
	name: "Credentials",
	credentials: {
		email: { label: "Email", type: "text", placeholder: "jsmith" },
		password: { label: "Password", type: "password" },
	},
	async authorize(credentials) {
		const { email, password } = credentials || {}
		if (!email || !password) return null
		try {
			const user = await prisma.accounts.findUnique({ where: { email } })

			if (!user) return null

			const isPwdCompared = await compare(password, user.password)

			if (!isPwdCompared) return null
			console.log("____! Auth user", user)

			return user
		} catch (e) {
			return null
		}
	},
})

const providers: AppProviders = [credentialsProvider]

export const authOptions: NextAuthOptions = {
	session: { strategy: "jwt" },
	secret: "alex-radosh",
	providers,
}
