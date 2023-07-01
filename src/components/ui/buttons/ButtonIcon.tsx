import { FC, ReactElement } from "react"
import cn from "clsx"
import Link from "next/link"
import { Variant } from "@/types/Styles"

type Props = {
	icon: ReactElement
	color: Variant
	round?: boolean
	href?: string
}

const ButtonIcon: FC<Props> = ({ icon, color, round, href }) => {
	const classes = cn(
		`btn text-${color} btn-sm bg-transparent`,
		round ? "btn-circle" : "btn-square"
	)
	if (href) {
		return (
			<Link href={href} className={classes}>
				{icon}
			</Link>
		)
	}
	return <button className={classes}>{icon}</button>
}

export default ButtonIcon
