export type PageProps<P extends string = string, SP extends string = string> = {
	params: Record<P, string>
	searchParams?: Record<SP, string>
}

export type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>

export type MessageResponse = {
	message: string
}

export type ErrorMessageResponse = MessageResponse & {
	error: string
}

export type StorageBucket = "creatures" | "tasks"

export type Category = {
	id: string
	title: string
	slug: string
	imageUrl: string
}
