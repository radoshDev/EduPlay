import { ComponentPropsWithoutRef, FC, ReactElement } from "react"
import cn from "clsx"
import Link from "next/link"
import { Variant } from "@/types/Styles"

type Props = {
	icon: ReactElement
	color: Variant
	round?: boolean
	href?: string
} & ComponentPropsWithoutRef<"button">

const ButtonIcon: FC<Props> = props => {
	const { icon, color, round, href, className, ...buttonProps } = props
	const classes = cn(
		`btn text-${color} btn-sm bg-transparent`,
		className,
		round ? "btn-circle" : "btn-square"
	)
	if (href) {
		return (
			<Link href={href} className={classes}>
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
