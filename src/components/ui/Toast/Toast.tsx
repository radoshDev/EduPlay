"use client"

import { Variant } from "@/types/Styles"
import { FC, useEffect, useState } from "react"
import Alert from "../Alert/Alert"

type Props = {
	variant: Variant
	message: string
}

const Toast: FC<Props> = ({ message, variant }) => {
	const [show, setShow] = useState(true)

	useEffect(() => {
		const interval = setInterval(() => {
			setShow(false)
		}, 5000)
		return () => {
			clearInterval(interval)
		}
	}, [])

	if (!show) return null
	return (
		<div className="toast">
			<Alert variant={variant} message={message} />
		</div>
	)
}

export default Toast
