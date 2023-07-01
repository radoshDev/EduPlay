import type { ComponentPropsWithoutRef, FC, ReactNode } from "react"
import cn from "clsx"
import Link from "next/link"
import { Size, Variant } from "@/types/Styles"

export type ButtonProps = {
	children: ReactNode
	href?: string
	variant?: Variant
	size?: Size
	isLoading?: boolean
} & ComponentPropsWithoutRef<"button">

const Button: FC<ButtonProps> = props => {
	const { children, href, isLoading, className, variant, size, ...otherProps } =
		props
	const classes = cn(className, `btn normal-case rounded-full`, {
		[`btn-${variant}`]: !!variant,
		[`btn-${size}`]: !!size,
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
