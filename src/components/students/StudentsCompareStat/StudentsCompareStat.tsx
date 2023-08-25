"use client"
import { useMemo, useState } from "react"
import ProgressGraph from "../ProgressGraph/ProgressGraph"
import { Progress, StudentsProgress } from "@/types/Student"
import { transformStatData } from "@/helpers/transformStatData"

type Props = {
	studentsProgress: StudentsProgress[]
}

const StudentsCompareStat = ({ studentsProgress }: Props) => {
	const [statPeriod, setStatPeriod] = useState("week")
	const [datasets, progressLabels] = useMemo(() => {
		let period = 7
		if (statPeriod === "month") period = 30
		if (statPeriod === "year") period = 365
		const days = studentsProgress[0].progress.length - period
		const startIndex = days > 0 ? days : 0

		let progress: Progress[] = []

		const filteredDataset = studentsProgress.map((item, i) => {
			const filteredProgress = item.progress.slice(startIndex)
			const transformedData = transformStatData(filteredProgress, statPeriod)
			if (i === 0) {
				progress = transformedData
			}
			return {
				...item,
				data: transformedData.map(({ value }) => value),
			}
		})
		const filteredLabels = progress.map(({ date }) => date)

		return [filteredDataset, filteredLabels]
	}, [statPeriod])

	function handleStatPeriod(val: string) {
		setStatPeriod(val)
	}
	return (
		<div className="w-full">
			<ProgressGraph
				statPeriod={statPeriod}
				handleStatPeriod={handleStatPeriod}
				datasets={datasets}
				legend
				progressLabels={progressLabels}
			/>
		</div>
	)
}

export default StudentsCompareStat
