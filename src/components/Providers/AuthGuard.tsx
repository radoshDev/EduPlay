"use client"

import { useSession } from "next-auth/react"
import { ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import PagePreloader from "../ui/PagePreloader/PagePreloader"

type Props = {
	children: ReactNode
}

const AuthGuard = ({ children }: Props) => {
	const { status } = useSession()
	const router = useRouter()
	const path = usePathname()
	console.log("AuthGuard", status)

	if (status === "loading") {
		console.log("Show preloader")

		return <PagePreloader />
	}
	if (status === "unauthenticated" && path !== "/") {
		router.push("/")
		return
	}
	if (status === "authenticated" && path === "/") {
		router.push("/students")
		return
	}
	return children
}

export default AuthGuard
