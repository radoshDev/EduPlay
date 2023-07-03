export type PageProps<P extends string = string, SP extends string = string> = {
	params: Record<P, string>
	searchParams?: Record<SP, string>
}

export type MessageResponse = {
	message: string
}

export type ErrorMessageResponse = MessageResponse & {
	error: string
}

export type StorageBucket = "creatures"
