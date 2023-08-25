"use client"

import { VerticalBar } from "@/components/ui/visualization"
import type { DailyProgress } from "@prisma/client"
import { SelectField } from "@/components/ui"
import { useMemo, useState } from "react"
import { transformStatData } from "@/helpers/transformStatData"

type Props = {
	dailyProgress: DailyProgress[]
}

type TransformedEntry = {
	date: string
	value: number
}

const StudentStat = ({ dailyProgress }: Props) => {
	const [statPeriod, setStatPeriod] = useState("week")
	const [progressLabels, progressData] = useMemo(() => {
		let period = 7
		if (statPeriod === "month") period = 30
		if (statPeriod === "year") period = 365

		const startIndex =
			dailyProgress.length - period > 0 ? dailyProgress.length - period : 0
		const filteredProgress = dailyProgress.slice(startIndex)
		const progress: TransformedEntry[] = transformStatData(
			filteredProgress,
			statPeriod
		)

		const labels = progress.map(({ date }) => date)
		const data = progress.map(({ value }) => value)
		return [labels, data]
	}, [dailyProgress, statPeriod])

	function handleStatPeriod(value: string) {
		setStatPeriod(value)
	}

	return (
		<div className="StudentStat">
			<div className="mb-4">
				<SelectField
					value={statPeriod}
					onChange={e => handleStatPeriod(e.target.value)}
					label="Період"
					options={[
						{ label: "Тиждень", value: "week" },
						{ label: "Місяць", value: "month" },
						{ label: "Рік", value: "year" },
					]}
				/>
			</div>
			<VerticalBar
				title="Виконано завдань"
				labels={progressLabels}
				data={progressData}
			/>
		</div>
	)
}

export default StudentStat
