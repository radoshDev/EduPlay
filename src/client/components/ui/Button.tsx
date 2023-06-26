import type { FC, ReactNode } from "react"
import BSButton, { ButtonProps } from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
import Link from "next/link"

type Props = {
	children: ReactNode
	href?: string
	isLoading?: boolean
} & ButtonProps

const Button: FC<Props> = ({ children, href, isLoading, ...otherProps }) => {
	if (href) {
		return (
			<Link href={href} className="btn">
				{children}
			</Link>
		)
	}
	return (
		<BSButton {...otherProps}>{isLoading ? <Spinner /> : children}</BSButton>
	)
}

export default Button
