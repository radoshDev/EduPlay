const csvParser = <T extends string = string>(
	strData: string
): Record<T, string>[] => {
	const list = strData.split(/\r?\n/)

	const headerList = list[0].split(",")

	const result = list.slice(1).map(curr => {
		const valueList = curr.split(",")
		const record: Record<string, string> = {}
		for (let i = 0; i < headerList.length; i++) {
			const header = headerList[i]?.trim()
			const value = valueList[i]?.trim()
			if (value) {
				record[header] = value
			}
		}
		return record as Record<T, string>
	})

	return result
}

export default csvParser
