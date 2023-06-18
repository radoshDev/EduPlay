import type { ButtonHTMLAttributes, FC, ReactNode } from "react"
import type { Color } from "@/types"
import clsx from "clsx"
import Link from "next/link"

type Props = {
	children: ReactNode
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
	className?: string
	color?: Color
	href?: string
}

const Button: FC<Props> = ({ children, className, href, color = "gray" }) => {
	const textColor =
		color === "gray" || color === "yellow" ? "text-black" : "text-white"
	const cn = clsx(
		className,
		`bg-${color}-500`,
		textColor,
		`hover:bg-${color}-700`,
		`focus:ring-${color}-400`,
		"leading-none py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75"
	)

	if (href) {
		return (
			<Link href={href} className={cn}>
				{children}
			</Link>
		)
	}
	return <button className={cn}>{children}</button>
}

export default Button
