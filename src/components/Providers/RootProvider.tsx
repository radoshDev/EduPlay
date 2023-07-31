"use client"
import { FC, ReactNode } from "react"
import { Provider } from "react-redux"
import TRPCProvider from "./TRPCProvider"
import { store } from "@/redux/store"

type Props = {
	children: ReactNode
}

const RootProvider: FC<Props> = ({ children }) => {
	return (
		<Provider store={store}>
			<TRPCProvider>{children}</TRPCProvider>
		</Provider>
	)
}

export default RootProvider
