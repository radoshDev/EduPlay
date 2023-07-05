"use client"

import { FC, ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { trpcClient, api } from "@/utils/api"

type Props = {
	children: ReactNode
}

const queryClient = new QueryClient()

const TRPCProvider: FC<Props> = ({ children }) => {
	return (
		<api.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</api.Provider>
	)
}

export default TRPCProvider
