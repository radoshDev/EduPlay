"use client"

import { FC } from "react"
import Button from "../Button"
import { signOut } from "next-auth/react"

const ButtonLogout: FC = () => {
	return (
		<Button
			variant="success"
			className="btn-sm"
			onClick={() => signOut({ callbackUrl: "/login" })}>
			Logout
		</Button>
	)
}

export default ButtonLogout
