import {
	ComponentPropsWithoutRef,
	FC,
	HTMLAttributeAnchorTarget,
	ReactElement,
} from "react"
import cn from "clsx"
import Link from "next/link"
import { Size, Variant } from "@/types/Styles"

type Props = {
	icon: ReactElement
	color: Variant
	round?: boolean
	href?: string
	target?: HTMLAttributeAnchorTarget
	size?: Size
} & ComponentPropsWithoutRef<"button">

const ButtonIcon: FC<Props> = props => {
	const { icon, color, round, size, href, className, target, ...buttonProps } =
		props
	const classes = cn(
		`btn text-${color} btn-${size || "sm"} bg-transparent`,
		className,
		"border-none",
		round ? "btn-circle" : "btn-square"
	)
	if (href) {
		return (
			<Link href={href} className={classes} target={target}>
				{icon}
			</Link>
		)
	}
	return (
		<button className={classes} {...buttonProps}>
			{icon}
		</button>
	)
}

export default ButtonIcon
