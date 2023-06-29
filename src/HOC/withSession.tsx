/* eslint-disable react/display-name */
"use client"

import { SessionProvider } from "next-auth/react"
import { FC } from "react"

const withSession = (Component: FC) => (props: any) => {
	return (
		<SessionProvider>
			<Component {...props} />
		</SessionProvider>
	)
}

export default withSession
