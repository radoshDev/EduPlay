"use client"
import React from "react"
import {
	Chart as ChartJS,
	type ChartData,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type Props = {
	title: string
	labels: string[]
	datasets: ChartData<"bar", number[]>["datasets"]
	legend?: boolean
}

function VerticalBar({ datasets, labels, title, legend }: Props) {
	return (
		<Bar
			options={{
				responsive: true,
				plugins: {
					legend: { display: legend || false },
					title: {
						display: true,
						text: title,
					},
				},
			}}
			data={{
				labels,
				datasets,
			}}
		/>
	)
}

export default VerticalBar
