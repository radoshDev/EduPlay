export type Color = "blue" | "green" | "red" | "gray" | "yellow"

export type PageProps<P extends string = string, SP extends string = string> = {
	params: Record<P, string>
	searchParams?: Record<SP, string>
}
