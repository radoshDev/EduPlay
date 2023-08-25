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
	data: number[]
}

function VerticalBar({ data, labels, title }: Props) {
	const chartData: ChartData<"bar", number[]> = {
		labels,
		datasets: [
			{
				data,
				backgroundColor: "rgba(87, 13, 248, 0.5)",
			},
		],
	}
	return (
		<Bar
			options={{
				responsive: true,
				plugins: {
					legend: { display: false },
					title: {
						display: true,
						text: title,
					},
				},
			}}
			data={chartData}
		/>
	)
}

export default VerticalBar
