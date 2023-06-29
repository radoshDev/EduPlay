/* eslint-disable react/display-name */
import { FC } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { trpcClient, api } from "@/utils/api"

const queryClient = new QueryClient()

const withTRPC = (Component: FC) => (props: any) => {
	return (
		<api.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<Component {...props} />
			</QueryClientProvider>
		</api.Provider>
	)
}

export default withTRPC
