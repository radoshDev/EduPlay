"use client"

import { FC } from "react"
import Button from "../Button/Button"
import { signOut } from "next-auth/react"

const ButtonLogout: FC = () => {
	return (
		<Button variant="success" className="btn-sm" onClick={() => signOut()}>
			Вийти
		</Button>
	)
}

export default ButtonLogout
