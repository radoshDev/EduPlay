"use client"

import type { DailyProgress } from "@prisma/client"
import { useMemo, useState } from "react"
import { transformStatData } from "@/helpers/transformStatData"
import ProgressGraph from "../ProgressGraph/ProgressGraph"
import { GRAPH_COLORS } from "@/constants"

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
			<ProgressGraph
				statPeriod={statPeriod}
				datasets={[
					{
						label: "Dan",
						data: progressData,
						backgroundColor: GRAPH_COLORS[0],
					},
				]}
				handleStatPeriod={handleStatPeriod}
				progressLabels={progressLabels}
			/>
		</div>
	)
}

export default StudentStat
