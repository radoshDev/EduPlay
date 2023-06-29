export type Color = "blue" | "green" | "red" | "yellow"
export type Variant =
	| "primary"
	| "secondary"
	| "neutral"
	| "error"
	| "success"
	| "warning"
	| "info"

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
