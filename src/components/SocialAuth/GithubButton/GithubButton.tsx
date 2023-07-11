"use client"

import { FC } from "react"
import Button from "../../ui/buttons/Button/Button"
import { signIn } from "next-auth/react"

const GithubButton: FC = () => {
	return (
		<Button
			variant="neutral"
			className="btn-sm"
			onClick={() => signIn("github", { callbackUrl: "/students" })}>
			Github
		</Button>
	)
}

export default GithubButton
