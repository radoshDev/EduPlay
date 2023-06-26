"use client"

import {
	LoginButton,
	LogoutButton,
	ProfileButton,
	RegisterButton,
} from "@/client/components/buttons"
import { useSession } from "next-auth/react"
import withSession from "@/client/HOC/withSession"

function Home() {
	const { data: session, status } = useSession()
	console.log("Session HOME page: ", session, status)

	return (
		<div className="container">
			<h1>Home page!!!</h1>
			<nav className="grid gap-4 text-blue-800">
				<LoginButton />
				<RegisterButton />
				<LogoutButton />
				<ProfileButton />
			</nav>
		</div>
	)
}

export default withSession(Home)
