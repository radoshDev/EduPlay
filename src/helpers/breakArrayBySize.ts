function breakArrayBySize(array: string[], chunkSize: number): string[][] {
	const chunks: string[][] = []

	for (let i = 0; i < array.length; i += chunkSize) {
		const chunk = array.slice(i, i + chunkSize)
		chunks.push(chunk)
	}

	return chunks
}

export default breakArrayBySize
