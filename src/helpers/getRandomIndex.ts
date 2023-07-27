export const getRandomIndex = (length: number, start?: number): number => {
	if (start) {
		return Math.floor(Math.random() * length + start)
	}
	return Math.floor(Math.random() * length)
}
