"use client"
import { SelectField } from "@/components/ui"
import { VerticalBar } from "@/components/ui/visualization"
import type { ChartDataset } from "chart.js"

type Props = {
	statPeriod: string
	handleStatPeriod: (val: string) => void
	progressLabels: string[]
	datasets: ChartDataset<"bar", number[]>[]
	legend?: boolean
}

const ProgressGraph = (props: Props) => {
	const { statPeriod, datasets, progressLabels, handleStatPeriod, legend } =
		props
	return (
		<div>
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
				legend={legend}
				title="Виконано завдань"
				labels={progressLabels}
				datasets={datasets}
			/>
		</div>
	)
}

export default ProgressGraph
