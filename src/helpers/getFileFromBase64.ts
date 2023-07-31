const getFileFromBase64 = async (base64: string) => {
	const response = await fetch(base64)
	const result = await response.blob()
	return result
}

export default getFileFromBase64
