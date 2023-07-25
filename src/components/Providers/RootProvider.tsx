"use client"
import { FC, ReactNode } from "react"
import { RecoilRoot } from "recoil"
import TRPCProvider from "./TRPCProvider"

type Props = {
	children: ReactNode
}

const RootProvider: FC<Props> = ({ children }) => {
	return (
		<RecoilRoot>
			<TRPCProvider>{children}</TRPCProvider>
		</RecoilRoot>
	)
}

export default RootProvider
