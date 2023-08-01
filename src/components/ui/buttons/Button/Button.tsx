import type {
	ComponentPropsWithoutRef,
	FC,
	HTMLAttributeAnchorTarget,
	ReactNode,
} from "react"
import cn from "clsx"
import Link from "next/link"
import { Size, Variant } from "@/types/Styles"

export type ButtonProps = {
	children: ReactNode
	href?: string
	variant?: Variant
	size?: Size
	isLoading?: boolean
	target?: HTMLAttributeAnchorTarget
} & ComponentPropsWithoutRef<"button">

const Button: FC<ButtonProps> = props => {
	const {
		children,
		href,
		isLoading,
		className,
		variant,
		size,
		target,
		...otherProps
	} = props
	const classes = cn(className, `btn normal-case rounded-full`, {
		[`btn-${variant}`]: !!variant,
		[`btn-${size}`]: !!size,
	})
	if (href) {
		return (
			<Link href={href} className={classes} target={target}>
				{children}
			</Link>
		)
	}
	return (
		<button disabled={isLoading} className={classes} {...otherProps}>
			{isLoading ? (
				<span className="loading loading-spinner loading-sm" />
			) : (
				children
			)}
		</button>
	)
}

export default Button
