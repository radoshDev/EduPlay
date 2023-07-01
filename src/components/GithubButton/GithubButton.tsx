"use client"

import { FC } from "react"
import Button from "../ui/Button"
import { signIn } from "next-auth/react"

const GithubButton: FC = () => {
	return (
		<Button
			variant="neutral"
			className="btn-sm"
			onClick={() => signIn("github", { callbackUrl: "/" })}>
			Github
		</Button>
	)
}

export default GithubButton
