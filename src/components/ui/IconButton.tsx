import type { Color } from "@/types"
import type { FC, ReactElement } from "react"

type Props = {
	color?: Color
	icon: ReactElement
}

const IconButton: FC<Props> = ({ color, icon }) => {
	return (
		<span
			className={`hover:bg-${color}-100 text-${color}-500 p-2 rounded-full flex`}>
			{icon}
		</span>
	)
}

export default IconButton
