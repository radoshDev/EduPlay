"use client"

import { signOut } from "next-auth/react"
import Link from "next/link"

export const LoginButton = () => {
	return (
		<Link href="/login" style={{ marginRight: 10 }}>
			Login
		</Link>
	)
}

export const RegisterButton = () => {
	return (
		<Link href="/register" style={{ marginRight: 10 }}>
			Register
		</Link>
	)
}

export const LogoutButton = () => {
	return (
		<button style={{ marginRight: 10 }} onClick={() => signOut()}>
			Sign Out
		</button>
	)
}

export const ProfileButton = () => {
	return <Link href="/profile">Profile</Link>
}
