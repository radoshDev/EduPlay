import type { ComponentPropsWithoutRef, FC, ReactNode } from "react"
import cn from "clsx"
import Link from "next/link"
import { Variant } from "@/types"

type Props = {
	children: ReactNode
	href?: string
	variant?: Variant
	isLoading?: boolean
} & ComponentPropsWithoutRef<"button">

const Button: FC<Props> = ({
	children,
	href,
	isLoading,
	className,
	variant,
	...otherProps
}) => {
	const classes = cn(className, `btn normal-case rounded-full`, {
		[`btn-${variant}`]: !!variant,
	})
	if (href) {
		return (
			<Link href={href} className={classes}>
				{children}
			</Link>
		)
	}
	return (
		<button className={classes} {...otherProps}>
			{isLoading ? (
				<span className="loading loading-spinner loading-sm" />
			) : (
				children
			)}
		</button>
	)
}

export default Button
