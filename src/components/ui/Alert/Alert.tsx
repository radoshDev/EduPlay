import { Variant } from "@/types/Styles"
import { FC, ReactElement } from "react"

type Props = {
	variant: Variant
	message: string
	icon?: ReactElement
}

const Alert: FC<Props> = ({ variant, message, icon }) => {
	return (
		<div className={`alert alert-${variant}`}>
			{icon}
			<span>{message}</span>
		</div>
	)
}

export default Alert
