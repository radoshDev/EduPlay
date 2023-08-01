import { DefaultSession, DefaultUser } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"
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
	interface User extends DefaultUser {
		role: PUser["role"]
	}
}

declare module "next-auth/jwt" {
	// eslint-disable-next-line no-unused-vars
	interface JWT extends DefaultJWT {
		role?: PUser["role"]
	}
}
