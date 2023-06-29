import { Variant } from "@/types"
import { FC } from "react"
import { BiSolidErrorCircle } from "react-icons/bi"

type Props = {
	variant: Variant
	message: string
}

const Alert: FC<Props> = ({ variant, message }) => {
	return (
		<div className={`alert alert-${variant}`}>
			<BiSolidErrorCircle />
			<span>{message}</span>
		</div>
	)
}

export default Alert
