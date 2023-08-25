import format from "date-fns/format"
import parseDate from "date-fns/parse"
import type { DailyProgress } from "@prisma/client"

type Progress = {
	date: string
	value: number
}

export const transformStatData = (
	data: DailyProgress[],
	period: string
): Progress[] => {
	return data.reduce<Progress[]>((result, entry) => {
		const date = parseDate(entry.date, "dd-MM-yyyy", new Date())
		const formatStr = period === "year" ? "MMM yyyy" : "dd MMM"
		const formattedDate = format(date, formatStr)

		if (period !== "year") {
			result.push({ date: formattedDate, value: entry.value })
			return result
		}

		const existingEntry = result.find(item => item.date === formattedDate)
		if (existingEntry) {
			existingEntry.value += entry.value
		} else {
			result.push({ date: formattedDate, value: entry.value })
		}
		return result
	}, [])
}
