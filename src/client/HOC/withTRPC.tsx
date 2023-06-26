/* eslint-disable react/display-name */
import { FC } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { trpc, trpcClient } from "@/client/config/trpc"

const queryClient = new QueryClient()

const withTRPC = (Component: FC) => (props: any) => {
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<Component {...props} />
			</QueryClientProvider>
		</trpc.Provider>
	)
}

export default withTRPC
