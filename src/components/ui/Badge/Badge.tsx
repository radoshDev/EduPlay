import type { Size, Variant } from "@/types/Styles"
import cn from "clsx"

type Props = {
	text: string
	color?: Variant
	size?: Size
	outline?: boolean
}

const Badge = ({ color, text, outline, size }: Props) => {
	const className = cn("badge", `badge-${color}`, `badge-${size}`, {
		["badge-outline"]: outline,
	})
	return <div className={className}>{text}</div>
}

export default Badge
