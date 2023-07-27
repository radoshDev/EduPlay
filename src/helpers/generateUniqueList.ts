import { getRandomIndex } from "./getRandomIndex"

export const generateUniqueList = <T>(list: T[], length: number): T[] => {
	list = [...new Set(list)]

	if (list.length <= length) return list

	const result: Set<T> = new Set()

	while (result.size !== length) {
		const randomIndex = getRandomIndex(list.length)
		const item = list[randomIndex]

		if (result.has(item)) continue

		result.add(item)
	}

	return Array.from(result)
}
